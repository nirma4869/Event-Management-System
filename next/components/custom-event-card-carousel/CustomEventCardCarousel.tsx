import { Stack } from "@mui/material";
import Carousel from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { EventCard } from "../event-card";
import { CustomEventCardCarouselProps } from "./types";

// ----------------------------------------------------------------------

export const CustomEventCardCarousel = ({
  events,
  carouselRef,
}: CustomEventCardCarouselProps) => {
  const moreThanThreeEvents = events.length > 3;
  const carouselSettings = {
    dots: moreThanThreeEvents,
    infinite: moreThanThreeEvents,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    waitForAnimate: false,
    draggable: moreThanThreeEvents,
    swipe: moreThanThreeEvents,
  };

  return (
    <Carousel {...carouselSettings} ref={carouselRef}>
      {events.map((event) => (
        <Stack direction={"row"}>
          <EventCard
            key={event.id}
            event={event}
            isLoggedIn={false}
            cardSx={{ sx: { mx: 2 } }}
          />
        </Stack>
      ))}
    </Carousel>
  );
};

export default CustomEventCardCarousel;
