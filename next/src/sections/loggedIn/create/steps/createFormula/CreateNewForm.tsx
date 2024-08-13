import i18n from "@/locales/i18n";
import { localizeFormTypes } from "@/utils/enumLocalization";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { useCreateFormulaContext } from ".";
import { useEventCreateContentContext } from "../..";
import FormAttributes from "./FormAttributes";
import { FormTypes, initialCustomForm } from "./types";

// ----------------------------------------------------------------------

export const CreateNewForm = () => {
  const {
    currentSelectedForm,
    createdForms,
    isEdit,
    setCurrentSelectedForm,
    setCreatedForms,
    setIsEdit,
  } = useCreateFormulaContext();
  const { methods } = useEventCreateContentContext();
  const [nameError, setNameError] = useState(false);

  const { name, type, id, options } = currentSelectedForm;
  const { setValue } = methods;

  const hasOptions = [
    FormTypes.CHECKBOX,
    FormTypes.DROPDOWN,
    FormTypes.RADIOBUTTON,
  ].includes(type);

  const handleChangeOptions = (event: SelectChangeEvent<FormTypes>) => {
    setCurrentSelectedForm({
      ...currentSelectedForm,
      type: event.target.value as FormTypes,
      options:
        hasOptions &&
        [
          FormTypes.CHECKBOX,
          FormTypes.DROPDOWN,
          FormTypes.RADIOBUTTON,
        ].includes(event.target.value as FormTypes)
          ? options
          : [""],
    });
  };

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentSelectedForm({
      ...currentSelectedForm,
      name: event.target.value,
    });
  };

  const handleCreate = () => {
    setNameError(false);

    if (name === "") {
      setNameError(true);
      return;
    }

    const newForms = [...createdForms];

    if (isEdit) {
      const index = createdForms.findIndex((form) => form.id === id);
      newForms[index] = currentSelectedForm;
      setIsEdit(false);
    } else {
      newForms.push({ ...currentSelectedForm, id: uuid() });
    }

    setCreatedForms(newForms);
    setCurrentSelectedForm(initialCustomForm);
  };

  const handleCancel = () => {
    setCurrentSelectedForm(initialCustomForm);
    setIsEdit(false);
  };

  const handleDelete = () => {
    const index = createdForms.findIndex((form) => form.id === id);
    const customFormsCopy = [...createdForms];
    customFormsCopy.splice(index, 1);
    setCreatedForms(customFormsCopy);
    setIsEdit(false);
    setCurrentSelectedForm(initialCustomForm);
  };

  useEffect(() => {
    const createdFormsAsJson = JSON.stringify(createdForms);
    setValue(`registrationFormular`, createdFormsAsJson);
  }, [createdForms, setValue]);

  return (
    <Stack direction="column" spacing={3}>
      <TextField
        required
        fullWidth
        value={name}
        error={nameError}
        label={i18n.t("loggedIn.createEvent.stepThree.createForm.name")}
        onChange={handleChangeName}
        helperText={
          nameError
            ? i18n.t("loggedIn.createEvent.stepThree.createForm.errorMessage")
            : ""
        }
      />
      <FormControl>
        <InputLabel>
          {i18n.t("loggedIn.createEvent.stepThree.createForm.type")}
        </InputLabel>
        <Select
          label={i18n.t("loggedIn.createEvent.stepThree.createForm.type")}
          value={type}
          onChange={handleChangeOptions}
        >
          {(Object.values(FormTypes) as FormTypes[])
            .filter((v) => !isNaN(Number(v)))
            .map((value) => (
              <MenuItem key={value} value={value}>
                {localizeFormTypes(value)}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      {hasOptions && <FormAttributes />}
      {isEdit ? (
        <Stack direction={"column"} spacing={2}>
          <Button
            variant="contained"
            onClick={handleCreate}
            sx={{ textTransform: "none" }}
          >
            {i18n.t("loggedIn.createEvent.stepThree.createForm.create.edit")}
          </Button>
          <Button
            variant="outlined"
            onClick={handleCancel}
            color="error"
            sx={{ textTransform: "none" }}
          >
            {i18n.t("loggedIn.createEvent.stepThree.createForm.cancel")}
          </Button>
          <Button
            variant="contained"
            onClick={handleDelete}
            color="error"
            sx={{ textTransform: "none" }}
          >
            {i18n.t("loggedIn.createEvent.stepThree.createForm.delete")}
          </Button>
        </Stack>
      ) : (
        <Button
          variant="contained"
          onClick={handleCreate}
          sx={{ textTransform: "none" }}
        >
          {i18n.t("loggedIn.createEvent.stepThree.createForm.create.new")}
        </Button>
      )}
    </Stack>
  );
};

export default CreateNewForm;
