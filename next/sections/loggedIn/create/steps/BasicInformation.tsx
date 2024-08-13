import { RHFTextField } from "@/components/hook-form";
import RHFInputField from "@/components/hook-form/RHFInputField";
import { Field, InputFieldType } from "@/components/hook-form/types";
import i18n from "@/locales/i18n";
import { Event } from "@/models/event";
import { NestedKeyOf } from "@/models/typeHelper";
import { Container, Divider, Grid, Stack, Typography } from "@mui/material";

// ----------------------------------------------------------------------

export const BasicInformation = () => {
  const BASIC_FIELDS: Field<NestedKeyOf<Event>>[] = [
    {
      name: "eventname",
      translation: i18n.t(
        "loggedIn.createEvent.stepOne.basics.inputFields.name"
      ),
      inputType: InputFieldType.TextField,
      required: true,
    },
    {
      name: "imageUrl",
      translation: i18n.t(
        "loggedIn.createEvent.stepOne.basics.inputFields.imageUrl"
      ),
      inputType: InputFieldType.TextField,
    },
    {
      name: "startTime",
      translation: i18n.t(
        "loggedIn.createEvent.stepOne.basics.inputFields.startDate"
      ),
      inputType: InputFieldType.DatePicker,
      required: true,
    },
    {
      name: "endTime",
      translation: i18n.t(
        "loggedIn.createEvent.stepOne.basics.inputFields.endDate"
      ),
      inputType: InputFieldType.DatePicker,
      required: true,
    },
  ];

  const CONTACT_FIELDS: Field<NestedKeyOf<Event>>[] = [
    {
      name: "contactInformation",
      translation: i18n.t(
        "loggedIn.createEvent.stepOne.contact.inputFields.email"
      ),
      inputType: InputFieldType.TextField,
    },
  ];

  const ADDRESS_FIELDS: Field<NestedKeyOf<Event>>[] = [
    {
      name: "adress",
      translation: i18n.t(
        "loggedIn.createEvent.stepOne.address.inputFields.line1"
      ),
      inputType: InputFieldType.TextField,
      required: true,
    },
    {
      name: "zip",
      translation: i18n.t(
        "loggedIn.createEvent.stepOne.address.inputFields.zip"
      ),
      inputType: InputFieldType.TextField,
      required: true,
    },
    {
      name: "city",
      translation: i18n.t(
        "loggedIn.createEvent.stepOne.address.inputFields.city"
      ),
      inputType: InputFieldType.TextField,
      required: true,
    },
    {
      name: "country",
      translation: i18n.t(
        "loggedIn.createEvent.stepOne.address.inputFields.country"
      ),
      inputType: InputFieldType.TextField,
      required: true,
    },
  ];

  return (
    <Container>
      <Stack sx={{ pt: 3, pb: 3 }}>
        <Typography variant="h4">
          {i18n.t("loggedIn.createEvent.stepOne.basics.label")}
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
        <Stack>
          <RHFTextField
            name={"description"}
            label={i18n.t(
              "loggedIn.createEvent.stepOne.basics.inputFields.description.label"
            )}
            placeholder={i18n.t(
              "loggedIn.createEvent.stepOne.basics.inputFields.description.placeholder"
            )}
            multiline
            rows={5}
          />
        </Stack>
      </Stack>

      <Divider sx={{ borderBottomWidth: 3 }} />

      <Stack sx={{ pt: 3, pb: 3 }}>
        <Typography variant="h4">
          {i18n.t("loggedIn.createEvent.stepOne.contact.label")}
        </Typography>
        <Grid container spacing={3} sx={{ pt: 3, pb: 3 }}>
          {CONTACT_FIELDS.map((field) =>
            field ? (
              <Grid item xs={12} md={6} key={field.name}>
                <RHFInputField field={field} />
              </Grid>
            ) : (
              <Grid key="placeholder" item xs={12} md={6} />
            )
          )}
        </Grid>
      </Stack>

      <Divider sx={{ borderBottomWidth: 3 }} />

      <Stack sx={{ pt: 3, pb: 3 }}>
        <Typography variant="h4">
          {i18n.t("loggedIn.createEvent.stepOne.address.label")}
        </Typography>
        <Grid container spacing={3} sx={{ pt: 3, pb: 3 }}>
          {ADDRESS_FIELDS.map((field) =>
            field ? (
              <Grid item xs={12} md={6} key={field.name}>
                <RHFInputField field={field} />
              </Grid>
            ) : (
              <Grid key="placeholder" item xs={12} md={6} />
            )
          )}
        </Grid>
      </Stack>
    </Container>
  );
};

export default BasicInformation;
