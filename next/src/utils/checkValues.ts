export const isEmptyString = (value: string | undefined | null) => {
  return !value || value === "" ? null : value;
};

export const isNullValue = (value: string | undefined | null) => {
  return !value ? "" : value;
};
