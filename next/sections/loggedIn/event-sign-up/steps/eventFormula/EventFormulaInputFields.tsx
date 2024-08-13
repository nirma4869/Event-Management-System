import { CustomInputField } from "@/components/custom-input-field";
import { CustomFormProps } from "@/sections/loggedIn/create/steps/createFormula/types";
import { Grid } from "@mui/material";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { Answer } from "./types";

// ----------------------------------------------------------------------

type Props = {
  forms: CustomFormProps[];
  answers: Answer[];
  setAnswers: Dispatch<SetStateAction<Answer[]>>;
};

// ----------------------------------------------------------------------

export const EventFormulaInputFields = ({
  forms,
  answers,
  setAnswers,
}: Props) => {
  const handleFieldChange = (
    event: ChangeEvent<HTMLInputElement>,
    questionId: string
  ) => {
    const answersCopy = [...answers];
    const answerIndex = answersCopy.findIndex(
      (answer) => answer.questionId === questionId
    );

    answersCopy[answerIndex].answer = event.target.value;
    setAnswers(answersCopy);
  };

  const handleDatePickerChange = (
    newValue: Date | null,
    questionId: string
  ) => {
    if (!newValue) {
      return;
    }

    const answersCopy = [...answers];
    const answerIndex = answersCopy.findIndex(
      (answer) => answer.questionId === questionId
    );

    answersCopy[answerIndex].answer = newValue;
    setAnswers(answersCopy);
  };

  return (
    <Grid container spacing={3} sx={{ pt: 3, pb: 3 }}>
      {forms.map((form) => (
        <Grid item xs={12} md={6} key={form.id}>
          <CustomInputField
            field={{
              ...form,
              handleFieldChange,
              handleDatePickerChange,
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default EventFormulaInputFields;
