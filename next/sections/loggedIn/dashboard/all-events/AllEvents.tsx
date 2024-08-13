import { EventCard } from "@/components/event-card";
import { useEventContext } from "@/context/EventContext";
import i18n from "@/locales/i18n";
import { Event } from "@/models/event";
import {
  initialState,
  resetFilter,
  setFilter,
  setFilterStatus,
} from "@/redux/slices/event";
import { useDispatch } from "@/redux/store";
import { applyFilter } from "@/sections/utils";
import { localizeEventStatus } from "@/utils/enumLocalization";
import {
  Container,
  Grid,
  SelectChangeEvent,
  Typography,
  useTheme,
} from "@mui/material";
import { eventStatus } from "@prisma/client";
import isEmpty from "lodash/isEmpty";
import AllEventsToolbar from "./Toolbar";

// ----------------------------------------------------------------------

type Props = {
  events: Event[];
  userEvents: Event[];
};

// ----------------------------------------------------------------------

export const AllEvents = ({ events, userEvents }: Props) => {
  const {
    filter: { search, dateRange, status },
  } = useEventContext();
  const dispatch = useDispatch();
  const theme = useTheme();

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
  return (
    <Container sx={{ pt: 6, alignItems: "center" }}>
      <Typography
        variant="h3"
        align="center"
        sx={{ pb: 9 }}
        color={theme.palette.primary.main}
      >
        {i18n.t("loggedIn.dashboard.allEvents.label")}
      </Typography>
      <AllEventsToolbar
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
      {isEmpty(events) ? (
        <></>
      ) : (
        <Grid container spacing={5}>
          {dataFiltered &&
            dataFiltered.map((event) => (
              <Grid key={event.id} item xs={12} sm={4} sx={{ display: "flex" }}>
                <EventCard
                  event={event}
                  isLoggedIn={!userEvents.includes(event)}
                />
              </Grid>
            ))}
        </Grid>
      )}
    </Container>
  );
};

export default AllEvents;
