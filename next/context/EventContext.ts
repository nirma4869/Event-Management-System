import { createContext, useContext } from "react";

import { Event } from "@/models/event";
import { UserData } from "@/models/userData";
import { EventFilter } from "@/redux/slices/event";

// ----------------------------------------------------------------------

export type EventContextType = {
  user: UserData | undefined;
  events: Event[] | undefined;
  filter: EventFilter;
};

// ----------------------------------------------------------------------

export const EventContext = createContext<EventContextType>(
  {} as EventContextType
);

export const useEventContext = () => useContext(EventContext);
