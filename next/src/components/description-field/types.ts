export type DescriptionFieldProps = {
  field: DescriptionFieldDefinition;
  onClick?: () => void;
  isNew: boolean;
};

export type DescriptionFieldDefinition = {
  value: string;
  translation: string;
};
