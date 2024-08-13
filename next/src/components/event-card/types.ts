import { Event } from "@/models/event";
import { CardProps } from "@mui/material";

// ----------------------------------------------------------------------

export type EventCardProps = {
  event: Event;
  isLoggedIn: boolean;
  cardSx?: CardProps;
};
