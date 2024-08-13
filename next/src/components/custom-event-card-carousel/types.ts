import { Event } from "@/models/event";
import { MutableRefObject } from "react";
import Carousel from "react-slick";

// ----------------------------------------------------------------------

export type CustomEventCardCarouselProps = {
  events: Event[];
  carouselRef: MutableRefObject<Carousel | null>;
};
