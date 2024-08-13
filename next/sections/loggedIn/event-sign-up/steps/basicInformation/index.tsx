// Name, description, contactInformation

import { RHFTextField } from "@/components/hook-form";
import RHFInputField from "@/components/hook-form/RHFInputField";
import { Field, InputFieldType } from "@/components/hook-form/types";
import i18n from "@/locales/i18n";
import { EventRegistration } from "@/models/eventRegistration";
import { NestedKeyOf } from "@/models/typeHelper";
import { Container, Grid, Stack, Typography } from "@mui/material";

// ----------------------------------------------------------------------

export const EventSignUpBasicInformation = () => {
  const BASIC_FIELDS: Field<NestedKeyOf<EventRegistration>>[] = [
    {
      name: "name",
      translation: i18n.t("loggedIn.eventSignUp.stepTwo.inputFields.name"),
      inputType: InputFieldType.TextField,
      required: true,
    },
    {
      name: "contactInformation",
      translation: i18n.t("loggedIn.eventSignUp.stepTwo.inputFields.contact"),
      inputType: InputFieldType.TextField,
      required: true,
    },
  ];

  return (
    <Container>
      <Stack sx={{ pt: 3, pb: 3 }}>
        <Typography variant="h4">
          {i18n.t("loggedIn.eventSignUp.stepTwo.label")}
        </Typography>
        <Grid container spacing={3} sx={{ pt: 3, pb: 3 }}>
          {BASIC_FIELDS.map((field) =>
            field ? (
              <Grid item xs={12} md={6} key={field.name}>
                <RHFInputField field={field} />
              </Grid>
            ) : (
              <Grid key="placeholder" item xs={12} md={6} />
            )
          )}
        </Grid>
        <RHFTextField
          name="description"
          label={i18n.t(
            "loggedIn.eventSignUp.stepTwo.inputFields.description.label"
          )}
          placeholder={i18n.t(
            "loggedIn.eventSignUp.stepTwo.inputFields.description.placeholder"
          )}
          multiline
          rows={3}
          required
        />
      </Stack>
    </Container>
  );
};

export default EventSignUpBasicInformation;
