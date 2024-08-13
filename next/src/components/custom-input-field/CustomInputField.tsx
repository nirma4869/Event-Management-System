import { FormTypes } from "@/sections/loggedIn/create/steps/createFormula/types";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import isEmpty from "lodash/isEmpty";
import { ChangeEvent } from "react";
import {
  CustomInputFieldProps,
  isCheckbox,
  isDatePicker,
  isRadio,
  isSelect,
  isTextField,
} from "./types";

// ----------------------------------------------------------------------

export const CustomInputField = ({ field }: CustomInputFieldProps) => {
  const { type, options, name, id } = field;
  const hasValidOptions = options && !isEmpty(options);

  switch (type) {
    case FormTypes.INPUTFIELD:
      return (
        isTextField(field) && (
          <TextField
            label={name}
            fullWidth
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              if (field.handleFieldChange) {
                field.handleFieldChange(event, id);
              }
            }}
          />
        )
      );

    case FormTypes.DATEPICKER:
      return (
        isDatePicker(field) && (
          <DatePicker
            label={name}
            slotProps={{ textField: { fullWidth: true } }}
            onChange={(newValue: Date | null) => {
              if (field.handleDatePickerChange) {
                field.handleDatePickerChange(newValue, id);
              }
            }}
          />
        )
      );

    case FormTypes.DROPDOWN:
      return (
        isSelect(field) && (
          <FormControl fullWidth>
            <InputLabel>{name}</InputLabel>
            <Select
              label={name}
              defaultValue=""
              onChange={(event: SelectChangeEvent<string>) => {
                if (field.handleFieldChange) {
                  field.handleFieldChange(event, id);
                }
              }}
            >
              {hasValidOptions &&
                options.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        )
      );

    case FormTypes.CHECKBOX:
      return (
        isCheckbox(field) &&
        hasValidOptions && (
          <FormControl sx={{ m: 3 }}>
            <FormLabel>{name}</FormLabel>
            <FormGroup row>
              {options.map((option) => (
                <FormControlLabel
                  key={option}
                  value={option}
                  control={
                    <Checkbox
                      onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        if (field.handleCheckBoxChange) {
                          field.handleCheckBoxChange(event, id);
                        }
                      }}
                    />
                  }
                  label={option}
                />
              ))}
            </FormGroup>
          </FormControl>
        )
      );

    case FormTypes.RADIOBUTTON:
      return (
        isRadio(field) &&
        hasValidOptions && (
          <FormControl sx={{ m: 3 }}>
            <FormLabel>{name}</FormLabel>
            <RadioGroup row>
              {options.map((option) => (
                <FormControlLabel
                  key={option}
                  control={
                    <Radio
                      onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        if (field.handleRadioChange) {
                          field.handleRadioChange(event, id);
                        }
                      }}
                    />
                  }
                  label={option}
                  value={option}
                />
              ))}
            </RadioGroup>
          </FormControl>
        )
      );
  }
};

export default CustomInputField;
