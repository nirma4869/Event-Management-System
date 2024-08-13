import { CustomInputField } from "@/components/custom-input-field";
import { CustomFormProps } from "@/sections/loggedIn/create/steps/createFormula/types";
import { Grid } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { Answer } from "./types";

// ----------------------------------------------------------------------

type Props = {
  forms: CustomFormProps[];
  answers: Answer[];
  setAnswers: Dispatch<SetStateAction<Answer[]>>;
};

// ----------------------------------------------------------------------

export const EventFormulaCheckBoxRadio = ({
  forms,
  answers,
  setAnswers,
}: Props) => {
  const handleCheckBoxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    questionId: string
  ) => {
    const answersCopy = [...answers];
    const answerIndex = answersCopy.findIndex(
      (answer) => answer.questionId === questionId
    );

    let currentAnswer = answersCopy[answerIndex].answer;
    if (currentAnswer && Array.isArray(currentAnswer)) {
      if (event.target.checked) {
        currentAnswer = [...currentAnswer, event.target.value];
      } else {
        currentAnswer = currentAnswer.filter(
          (val) => val != event.target.value
        );
      }

      answersCopy[answerIndex].answer = currentAnswer;
      setAnswers(answersCopy);
    }
  };

  const handleRadioChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    questionId: string
  ) => {
    const answersCopy = [...answers];
    const answerIndex = answersCopy.findIndex(
      (answer) => answer.questionId === questionId
    );

    answersCopy[answerIndex].answer = event.target.value;
    setAnswers(answersCopy);
  };

  return (
    <Grid container spacing={3}>
      {forms.map((form) => (
        <Grid item xs={12} md={6} key={form.id}>
          <CustomInputField
            field={{
              ...form,
              handleCheckBoxChange,
              handleRadioChange,
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default EventFormulaCheckBoxRadio;
