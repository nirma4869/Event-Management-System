"use client";

import { CustomStepper } from "@/components/custom-stepper";
import FormProvider from "@/components/hook-form";
import i18n from "@/locales/i18n";
import { Event, EventSchema, createInitialEvent } from "@/models/event";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container, Stack } from "@mui/material";
import { createContext, useContext, useMemo, useRef, useState } from "react";
import { UseFormReturn, useForm } from "react-hook-form";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { CreateEventToolbar } from "./Toolbar";
import BasicInformation from "./steps/BasicInformation";
import CreateFormula from "./steps/createFormula";
import CreateRoom from "./steps/createRoom";

// ----------------------------------------------------------------------

type EventCreateContentContextType = {
  methods: UseFormReturn<Event, any>;
};

export const EventCreateContentContext =
  createContext<EventCreateContentContextType>(
    {} as EventCreateContentContextType
  );

export const useEventCreateContentContext = () => {
  const context = useContext(EventCreateContentContext);
  if (!context) {
    throw new Error(
      "useEventCreateContentContext must be used within a EventCreateContentContext"
    );
  }
  return context;
};

type EventCreateContentProps = {
  id: number;
  content: React.ReactNode;
};

// ----------------------------------------------------------------------

export const EventCreatePageContent = () => {
  const methods = useForm<Event>({
    defaultValues: createInitialEvent(),
    resolver: zodResolver(EventSchema()),
  });

  const [step, setStep] = useState(0);

  const ref = useRef<Slider | null>(null);

  const contextValue: EventCreateContentContextType = useMemo(
    () => ({
      methods,
    }),
    [methods]
  );

  const CAROUSEL_ITEMS: EventCreateContentProps[] = [
    {
      id: 1,
      content: <BasicInformation />,
    },
    {
      id: 2,
      content: <CreateFormula />,
    },
    {
      id: 3,
      content: <CreateRoom />,
    },
  ];

  const STEPS = [
    i18n.t("loggedIn.createEvent.steps.first"),
    i18n.t("loggedIn.createEvent.steps.second"),
    i18n.t("loggedIn.createEvent.steps.third"),
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

  return (
    <FormProvider methods={methods}>
      <EventCreateContentContext.Provider value={contextValue}>
        <Container sx={{ pt: 15 }}>
          <CustomStepper
            steps={STEPS}
            activeStep={step}
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
          />

          <CreateEventToolbar />

          <Slider {...carouselSettings} ref={ref}>
            {CAROUSEL_ITEMS.map((item) => (
              <Stack key={item.id}>{item.content}</Stack>
            ))}
          </Slider>
        </Container>
      </EventCreateContentContext.Provider>
    </FormProvider>
  );
};

export default EventCreatePageContent;
