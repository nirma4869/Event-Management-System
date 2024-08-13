import RHFInputField from "@/components/hook-form/RHFInputField";
import {Field, InputFieldType} from "@/components/hook-form/types";
import {NestedKeyOf} from "@/models/typeHelper";
import {User} from "@/models/user";
import i18n from "@/locales/i18n";
import {Grid} from "@mui/material";

export const UserSettingsForm = () => {

    const FIELDS : Field<NestedKeyOf<User>>[] = [
        {
            name: "username",
            translation: i18n.t(
                "loggedIn.user.settings.form.inputFields.username"
            ),
            inputType: InputFieldType.TextField,
            disabled: true,
        },
        {
            name: "email",
            translation: i18n.t(
                "loggedIn.user.settings.form.inputFields.email"
            ),
            inputType: InputFieldType.TextField,
        },
        {
            name: "imageUrl",
            translation: i18n.t(
                "loggedIn.user.settings.form.inputFields.imageUrl"
            ),
            inputType: InputFieldType.TextField,
        },
        {
            name: "firstName",
            translation: i18n.t(
                "loggedIn.user.settings.form.inputFields.firstName"
            ),
            inputType: InputFieldType.TextField,
            required: true,
        },
        {
            name: "lastName",
            translation: i18n.t(
                "loggedIn.user.settings.form.inputFields.lastName"
            ),
            inputType: InputFieldType.TextField,
            required: true,
        }
        ]

    return(
        <>
            <Grid container spacing={3} sx={{ pt: 3}}>
                {FIELDS.map((field) =>
                    field ? (
                        <Grid item xs={12} md={12} key={field.name}>
                            <RHFInputField field={field} />
                        </Grid>
                    ) : (
                        <Grid key="placeholder" item xs={12} md={12} />
                    )
                )}
            </Grid>
        </>
    )
}