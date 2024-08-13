export enum FormTypes {
  INPUTFIELD,
  DROPDOWN,
  CHECKBOX,
  RADIOBUTTON,
  DATEPICKER,
}

export type CustomFormProps = {
  id: string;
  type: FormTypes;
  name: string;
  options?: string[];
};

export const initialCustomForm: CustomFormProps = {
  id: "",
  type: FormTypes.INPUTFIELD,
  name: "",
};
