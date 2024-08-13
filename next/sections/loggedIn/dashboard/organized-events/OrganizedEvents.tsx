import { CustomEventCardCarousel } from "@/components/custom-event-card-carousel/CustomEventCardCarousel";
import i18n from "@/locales/i18n";
import { Event } from "@/models/event";
import { Container, Typography, useTheme } from "@mui/material";
import isEmpty from "lodash/isEmpty";
import { useRef } from "react";
import Carousel from "react-slick";
import OrganizedEventsToolbar from "./Toolbar";

// ----------------------------------------------------------------------

type Props = {
  organizedEvents: Event[];
};

// ----------------------------------------------------------------------

export const OrganizedEvents = ({ organizedEvents }: Props) => {
  const theme = useTheme();
  const carouselRef = useRef<Carousel | null>(null);

  const handleNextSlide = () => {
    carouselRef.current?.slickNext();
  };

  const handlePreviousSlide = () => {
    carouselRef.current?.slickPrev();
  };

  return (
    <Container sx={{ alignItems: "center", pb: 5 }}>
      <Typography
        variant="h3"
        align="center"
        sx={{ pb: 3 }}
        color={theme.palette.primary.main}
      >
        {i18n.t("loggedIn.dashboard.organizedEvents.label")}
      </Typography>

      <OrganizedEventsToolbar
        onNextSlide={handleNextSlide}
        onPrevSlide={handlePreviousSlide}
        showButtons={organizedEvents.length > 3}
      />

      {isEmpty(organizedEvents) ? (
        <></>
      ) : (
        <CustomEventCardCarousel
          events={organizedEvents}
          carouselRef={carouselRef}
        />
      )}
    </Container>
  );
};

export default OrganizedEvents;
