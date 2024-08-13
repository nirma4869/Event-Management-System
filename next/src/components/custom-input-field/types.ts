import {
  CustomFormProps,
  FormTypes,
} from "@/sections/loggedIn/create/steps/createFormula/types";
import { SelectChangeEvent } from "@mui/material";
import { ChangeEvent } from "react";

// ----------------------------------------------------------------------

export type CustomInputFieldProps = {
  field: FieldProps;
};

type FieldProps =
  | CustomTextFieldProps
  | CustomSelectProps
  | CustomDatePickerProps
  | CustomCheckBoxProps
  | CustomRadioProps;

type BasicInputFieldProps = CustomFormProps;

type CustomTextFieldProps = BasicInputFieldProps & {
  handleFieldChange?: (
    event: ChangeEvent<HTMLInputElement>,
    questionId: string
  ) => void;
};

type CustomDatePickerProps = BasicInputFieldProps & {
  handleDatePickerChange?: (event: Date | null, questionId: string) => void;
};

type CustomSelectProps = BasicInputFieldProps & {
  handleFieldChange?: (
    event: SelectChangeEvent<string>,
    questionId: string
  ) => void;
};

type CustomCheckBoxProps = BasicInputFieldProps & {
  handleCheckBoxChange?: (
    event: ChangeEvent<HTMLInputElement>,
    questionId: string
  ) => void;
};

type CustomRadioProps = BasicInputFieldProps & {
  handleRadioChange?: (
    event: ChangeEvent<HTMLInputElement>,
    questionId: string
  ) => void;
};

// TypeGuard for TextField
export const isTextField = (form: FieldProps): form is CustomTextFieldProps =>
  (form as CustomTextFieldProps).type === FormTypes.INPUTFIELD;

// TypeGuard for DatePicker
export const isDatePicker = (form: FieldProps): form is CustomDatePickerProps =>
  (form as CustomDatePickerProps).type === FormTypes.DATEPICKER;

// TypeGuard for Select
export const isSelect = (form: FieldProps): form is CustomSelectProps =>
  (form as CustomSelectProps).type === FormTypes.DROPDOWN;

// TypeGuard for Checkbox
export const isCheckbox = (form: FieldProps): form is CustomCheckBoxProps =>
  (form as CustomCheckBoxProps).type === FormTypes.CHECKBOX;

// TypeGuard for Radio
export const isRadio = (form: FieldProps): form is CustomRadioProps =>
  (form as CustomRadioProps).type === FormTypes.RADIOBUTTON;
