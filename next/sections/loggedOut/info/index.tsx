"use client";

import { EventCard } from "@/components/event-card";
import { useEventContext } from "@/context/EventContext";
import { Event } from "@/models/event";
import {
  fetchEvents,
  initialState,
  resetFilter,
  setFilter,
  setFilterStatus,
} from "@/redux/slices/event";
import { useDispatch } from "@/redux/store";
import { localizeEventStatus } from "@/utils/enumLocalization";
import { Container, Divider, Grid, SelectChangeEvent } from "@mui/material";
import { eventStatus } from "@prisma/client";
import { useEffect } from "react";
import { applyFilter } from "../../utils";
import EventInfoCarousel from "./Carousel";
import { EventInfoToolbar } from "./Toolbar";

// ----------------------------------------------------------------------

export const EventInfoContent = () => {
  const {
    events,
    filter: { search, dateRange, status },
  } = useEventContext();
  const dispatch = useDispatch();

  const dataFiltered: Event[] | undefined = applyFilter({
    inputData: events,
    filterName: search,
    filterStartDate: dateRange.start,
    filterEndDate: dateRange.end,
    filterStatus: status,
  });

  const STATUS_OPTIONS = [
    {
      value: eventStatus.OPEN,
      label: localizeEventStatus(eventStatus.OPEN),
    },
    {
      value: eventStatus.ONGOING,
      label: localizeEventStatus(eventStatus.ONGOING),
    },
    {
      value: eventStatus.CLOSED,
      label: localizeEventStatus(eventStatus.CLOSED),
    },
  ];

  const isFiltered =
    search !== "" ||
    dateRange.start !== initialState.filter.dateRange.start ||
    dateRange.end !== initialState.filter.dateRange.end ||
    !!status.length;

  const handleFilterName = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter({ search: event.target.value }));
  };

  const handleFilterStartDate = (newValue: Date | null) => {
    dispatch(setFilter({ dateRange: { start: newValue } }));
  };

  const handleFilterEndDate = (newValue: Date | null) => {
    dispatch(setFilter({ dateRange: { end: newValue } }));
  };

  const handleFilterStatus = (event: SelectChangeEvent<eventStatus[]>) => {
    const {
      target: { value },
    } = event;

    dispatch(setFilterStatus(value as eventStatus[]));
  };

  const handleFilterReset = () => {
    dispatch(resetFilter());
  };

  useEffect(() => {
    dispatch(fetchEvents());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container sx={{ pt: 15 }}>
      <EventInfoCarousel />

      <Divider sx={{ pt: 10 }} />

      <Container sx={{ pt: 10, alignItems: "center" }}>
        <EventInfoToolbar
          isFiltered={isFiltered}
          filterName={search}
          filterStartDate={dateRange.start}
          filterEndDate={dateRange.end}
          filterStatus={status}
          statusOptions={STATUS_OPTIONS}
          onFilterStartDate={handleFilterStartDate}
          onFilterEndDate={handleFilterEndDate}
          onFilterName={handleFilterName}
          onFilterStatus={handleFilterStatus}
          onResetFilter={handleFilterReset}
        />
        <Grid container spacing={5}>
          {dataFiltered &&
            dataFiltered.map((event) => (
              <Grid key={event.id} item xs={12} sm={4} sx={{ display: "flex" }}>
                <EventCard event={event} isLoggedIn={false} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </Container>
  );
};

export default EventInfoContent;
