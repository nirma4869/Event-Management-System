import Iconify from "@/components/iconify";
import i18n from "@/locales/i18n";
import AddIcon from "@mui/icons-material/Add";
import { IconButton, Stack, TextField, useTheme } from "@mui/material";
import { useCreateFormulaContext } from ".";

// ----------------------------------------------------------------------

export const FormAttributes = () => {
  const theme = useTheme();
  const { currentSelectedForm, setCurrentSelectedForm } =
    useCreateFormulaContext();
  const { options } = currentSelectedForm;

  const handleAddOption = () => {
    if (options) {
      const newOptions = [...options];
      newOptions.push("");
      setCurrentSelectedForm({ ...currentSelectedForm, options: newOptions });
    }
  };

  const handleChangeOption = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (options) {
      const newOptions = [...options];
      newOptions[index] = event.target.value;
      setCurrentSelectedForm({ ...currentSelectedForm, options: newOptions });
    }
  };

  const handleDelete = (index: number) => {
    if (options) {
      const newOptions = [...options];
      newOptions.splice(index, 1);
      setCurrentSelectedForm({ ...currentSelectedForm, options: newOptions });
    }
  };

  return (
    <>
      {options &&
        options.map((option, index) => (
          <Stack
            key={index}
            direction={"row"}
            alignItems={"center"}
            spacing={3}
          >
            {options && options.length > 1 && (
              <Iconify
                icon="ic:baseline-delete"
                onClick={() => handleDelete(index)}
                sx={{ cursor: "pointer" }}
                color={theme.palette.error.main}
              />
            )}

            <TextField
              onChange={(event) => handleChangeOption(index, event)}
              fullWidth
              value={option}
              label={i18n.t(
                "loggedIn.createEvent.stepThree.createForm.answerOption",
                { counter: index + 1 }
              )}
            />
          </Stack>
        ))}
      <IconButton disableRipple onClick={handleAddOption}>
        <AddIcon />
      </IconButton>
    </>
  );
};

export default FormAttributes;
