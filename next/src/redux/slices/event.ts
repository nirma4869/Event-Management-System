import { Event } from "@/models/event";
import { EventRegistration } from "@/models/eventRegistration";
import { DateRange } from "@/models/typeHelper";
import { eventStatus } from "@prisma/client";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import merge from "lodash/merge";
import { PartialDeep } from "type-fest";
import { AppThunk } from "../store";

// ----------------------------------------------------------------------

export type AsyncCallStatus = "idle" | "loading" | "succeeded" | "failed";

export type EventFilter = {
  search: string;
  dateRange: DateRange;
  status: eventStatus[];
};

export type EventState = {
  events: Event[] | undefined;
  status: {
    events: { fetch: AsyncCallStatus; create: AsyncCallStatus };
    eventsRegistrations: { create: AsyncCallStatus };
  };
  error: {
    events: { fetch: Error | string | null; create: Error | string | null };
    eventsRegistrations: {
      create: Error | string | null;
    };
  };
  filter: EventFilter;
};

// ----------------------------------------------------------------------

export const initialState: EventState = {
  events: [],
  status: {
    events: { fetch: "idle", create: "idle" },
    eventsRegistrations: { create: "idle" },
  },
  error: {
    events: { fetch: null, create: null },
    eventsRegistrations: { create: null },
  },
  filter: { search: "", dateRange: { start: null, end: null }, status: [] },
};

// ----------------------------------------------------------------------

const slice = createSlice({
  name: "event",
  initialState,
  reducers: {
    fetchEventsStarted(state) {
      state.status.events.fetch = "loading";
    },
    fetchEventsFailed(state, action) {
      state.status.events.fetch = "failed";
      state.error.events.fetch = action.payload;
    },
    fetchEventsSucceeded(state, action: PayloadAction<Event[]>) {
      state.status.events.fetch = "succeeded";
      state.events = action.payload;
    },
    createEventStarted(state) {
      state.status.events.create = "loading";
    },
    createEventFailed(state, action) {
      state.status.events.create = "failed";
      state.error.events.create = action.payload;
    },
    createEventSucceeded(state, action: PayloadAction<Event>) {
      state.status.events.create = "succeeded";
      if (state.events) {
        state.events.push(action.payload);
      }
    },
    createEventRegistrationStarted(state) {
      state.status.eventsRegistrations.create = "loading";
    },
    createEventRegistrationFailed(state, action) {
      state.status.eventsRegistrations.create = "failed";
      state.error.eventsRegistrations.create = action.payload;
    },
    createEventRegistrationSucceeded(
      state,
      action: PayloadAction<EventRegistration>
    ) {
      if (state.events) {
        const eventIndex = state.events.findIndex(
          (event) => event.id === action.payload.eventId
        );
        if (eventIndex != -1) {
          const event = state.events[eventIndex];
          event.eventRegistrations.push(action.payload);
          state.events[eventIndex] = event;
        }
      }
      state.status.eventsRegistrations.create = "succeeded";
    },
    fetchEvents: (state, action: PayloadAction<Event[]>) => {
      state.events = action.payload;
    },

    setFilterStatus(state, action: PayloadAction<eventStatus[]>) {
      state.filter = { ...state.filter, status: action.payload };
    },

    setFilter(state, action: PayloadAction<PartialDeep<EventFilter>>) {
      const filter = action.payload;

      state.filter = merge(state.filter, filter);
    },

    resetFilter(state) {
      state.filter = { ...initialState.filter };
    },
  },
});

export const { setFilterStatus, setFilter, resetFilter } = slice.actions;

export default slice.reducer;

// App Thunks
// ----------------------------------------------------------------------

export const fetchEvents = (): AppThunk<Promise<Event[]>> => {
  return async (dispatch) => {
    dispatch(slice.actions.fetchEventsStarted());

    try {
      const response = await fetch("/api/event/fetch", { method: "GET" });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }

      const data = await response.json();

      dispatch(slice.actions.fetchEventsSucceeded(data.data));
      return Promise.resolve(data.data);
    } catch (error) {
      dispatch(slice.actions.fetchEventsFailed(error));
      return Promise.reject(error);
    }
  };
};

export const createEvent = (newEvent: Event): AppThunk<Promise<Event>> => {
  return async (dispatch) => {
    dispatch(slice.actions.createEventStarted());

    try {
      const response = await fetch("/api/event/create", {
        method: "PUT",
        body: JSON.stringify(newEvent),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }

      const data = await response.json();

      dispatch(slice.actions.createEventSucceeded(data.createdEvent));
      return Promise.resolve(data.data);
    } catch (error: any) {
      dispatch(slice.actions.createEventFailed(error));
      return Promise.reject(error);
    }
  };
};

export const createEventRegistration = (
  newEventRegistration: EventRegistration
): AppThunk<Promise<EventRegistration>> => {
  return async (dispatch) => {
    dispatch(slice.actions.createEventRegistrationStarted());

    try {
      const response = await fetch("/api/eventRegistration/create", {
        method: "PUT",
        body: JSON.stringify(newEventRegistration),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }

      const data = await response.json();

      dispatch(
        slice.actions.createEventRegistrationSucceeded(
          data.createdEventRegistration
        )
      );
      return Promise.resolve(data.data);
    } catch (error: any) {
      dispatch(slice.actions.createEventRegistrationFailed(error));
      return Promise.reject(error);
    }
  };
};
