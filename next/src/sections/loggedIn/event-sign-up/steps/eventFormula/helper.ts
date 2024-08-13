import {
  CustomFormProps,
  FormTypes,
} from "@/sections/loggedIn/create/steps/createFormula/types";
import { Answer } from "./types";

// ----------------------------------------------------------------------

export const createInitialAnswerArray = (
  questions: CustomFormProps[]
): Answer[] => {
  return questions.map((question) => {
    if (question.type === FormTypes.CHECKBOX && question.options) {
      return {
        answer: [],
        questionId: question.id,
      };
    } else
      return {
        answer: undefined,
        questionId: question.id,
      };
  });
};
