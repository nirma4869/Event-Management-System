import { EventRegistration } from "@/models/eventRegistration";
import {
  CustomFormProps,
  FormTypes,
} from "@/sections/loggedIn/create/steps/createFormula/types";
import { Container } from "@mui/material";
import { Prisma } from "@prisma/client";
import { useEffect, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import EventFormulaCheckBoxRadio from "./EventFormulaCheckBoxRadio";
import EventFormulaInputFields from "./EventFormulaInputFields";
import { createInitialAnswerArray } from "./helper";
import { Answer } from "./types";

// ----------------------------------------------------------------------

type Props = {
  registrationFormular: Prisma.JsonValue;
  methods: UseFormReturn<EventRegistration, any>;
};

// ----------------------------------------------------------------------

export const EventSignUpEventFormula = ({
  registrationFormular,
  methods,
}: Props) => {
  const { setValue } = methods;

  const eventFormulaForms: CustomFormProps[] = JSON.parse(
    registrationFormular as string
  );

  const [answers, setAnswers] = useState<Answer[]>(
    createInitialAnswerArray(eventFormulaForms)
  );

  const inputFields = eventFormulaForms.filter((form) =>
    [FormTypes.DATEPICKER, FormTypes.INPUTFIELD, FormTypes.DROPDOWN].includes(
      form.type
    )
  );

  const checkBoxRadioFields = eventFormulaForms.filter((form) =>
    [FormTypes.CHECKBOX, FormTypes.RADIOBUTTON].includes(form.type)
  );

  useEffect(() => {
    const answersAsJson = JSON.stringify(answers);
    setValue(`formularAnswers`, answersAsJson);
  }, [answers, setValue]);

  return (
    <Container>
      <EventFormulaInputFields
        forms={inputFields}
        answers={answers}
        setAnswers={setAnswers}
      />
      <EventFormulaCheckBoxRadio
        forms={checkBoxRadioFields}
        answers={answers}
        setAnswers={setAnswers}
      />
    </Container>
  );
};

export default EventSignUpEventFormula;
