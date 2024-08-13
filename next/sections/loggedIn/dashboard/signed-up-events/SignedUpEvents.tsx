import { CustomEventCardCarousel } from "@/components/custom-event-card-carousel";
import i18n from "@/locales/i18n";
import { Event } from "@/models/event";
import { Container, Typography, useTheme } from "@mui/material";
import { useRef } from "react";
import Carousel from "react-slick";
import SignedUpEventsToolbar from "./Toolbar";

// ----------------------------------------------------------------------

type Props = {
  signedUpEvents: Event[];
};

// ----------------------------------------------------------------------

export const SignedUpEvents = ({ signedUpEvents }: Props) => {
  const theme = useTheme();
  const carouselRef = useRef<Carousel | null>(null);

  const handleNextSlide = () => {
    carouselRef.current?.slickNext();
  };

  const handlePreviousSlide = () => {
    carouselRef.current?.slickPrev();
  };

  return (
    <Container sx={{ pt: 6, alignItems: "center", pb: 5 }}>
      <Typography
        variant="h3"
        align="center"
        sx={{ pb: 3 }}
        color={theme.palette.primary.main}
      >
        {i18n.t("loggedIn.dashboard.signedUpEvents.label")}
      </Typography>

      {signedUpEvents.length > 3 && (
        <SignedUpEventsToolbar
          onNextSlide={handleNextSlide}
          onPrevSlide={handlePreviousSlide}
        />
      )}

      <CustomEventCardCarousel
        events={signedUpEvents}
        carouselRef={carouselRef}
      />
    </Container>
  );
};

export default SignedUpEvents;
