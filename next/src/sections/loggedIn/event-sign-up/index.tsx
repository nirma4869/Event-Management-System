"use client";

import { CustomStepper } from "@/components/custom-stepper";
import FormProvider from "@/components/hook-form";
import { useEventContext } from "@/context/EventContext";
import i18n from "@/locales/i18n";
import {
  EventRegistration,
  EventRegistrationSchema,
  createInitialEventRegistration,
} from "@/models/eventRegistration";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container, Stack } from "@mui/material";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import EventSignUpToolbar from "./Toolbar";
import EventSignUpBasicInformation from "./steps/basicInformation";
import EventSignUpEventFormula from "./steps/eventFormula";
import EventSignUpTableChoice from "./steps/tableChoice";

// ----------------------------------------------------------------------

type Props = {
  eventId: number;
};

type EventSignUpContentProps = {
  id: number;
  content: React.ReactNode;
};

// ----------------------------------------------------------------------

export const EventSignUpPageContent = ({ eventId }: Props) => {
  const { events } = useEventContext();
  const [step, setStep] = useState(0);
  const ref = useRef<Slider | null>(null);

  const methods = useForm<EventRegistration>({
    defaultValues: createInitialEventRegistration(parseInt(eventId.toString())),
    resolver: zodResolver(EventRegistrationSchema()),
  });

  const currentEvent = events?.find((event) => eventId == event.id);

  const STEPS = [
    i18n.t("loggedIn.eventSignUp.steps.first"),
    i18n.t("loggedIn.eventSignUp.steps.second"),
    i18n.t("loggedIn.eventSignUp.steps.third"),
  ];

  const carouselSettings = {
    speed: 500,
    arrows: false,
    initialSlide: 1,
    rtl: true,
    swipe: false,
    draggable: false,
    waitForAnimate: false,
  };

  const handleNextStep = () => {
    setStep(step + 1);
    ref.current?.slickNext();
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
    ref.current?.slickPrev();
  };

  const CAROUSEL_ITEMS: EventSignUpContentProps[] = [
    {
      id: 1,
      content: currentEvent ? (
        <EventSignUpTableChoice
          methods={methods}
          selectedEvent={currentEvent}
        />
      ) : (
        <></>
      ),
    },
    {
      id: 2,
      content:
        currentEvent && currentEvent.registrationFormular ? (
          <EventSignUpEventFormula
            registrationFormular={currentEvent.registrationFormular}
            methods={methods}
          />
        ) : (
          <div>No</div>
        ),
    },
    {
      id: 3,
      content: <EventSignUpBasicInformation />,
    },
  ];

  return (
    <FormProvider methods={methods}>
      <Container sx={{ pt: 15 }}>
        <CustomStepper
          steps={STEPS}
          activeStep={step}
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
        />

        <EventSignUpToolbar methods={methods} />

        <Slider {...carouselSettings} ref={ref}>
          {CAROUSEL_ITEMS.map((item) => (
            <Stack key={item.id}>{item.content}</Stack>
          ))}
        </Slider>
      </Container>
    </FormProvider>
  );
};

export default EventSignUpPageContent;
