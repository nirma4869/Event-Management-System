import i18n from "@/locales/i18n";
import { User } from "@/models/user";
import { updateUser } from "@/redux/slices/user";
import { useDispatch } from "@/redux/store";
import { UserSettingsToolbarProps } from "@/sections/loggedIn/user/settings/types";
import { Button, Stack } from "@mui/material";
import Link from "next/link";
import { useSnackbar } from "notistack";

// ----------------------------------------------------------------------

export const UserSettingsToolbar = ({ methods }: UserSettingsToolbarProps) => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const { handleSubmit } = methods;
  const handeUserSettingsUpdate = async (data: User) => {
    try {
      await dispatch(updateUser(data));
      enqueueSnackbar(i18n.t("loggedIn.user.settings.toolbar.saveSuccess"), {
        variant: "success",
      });
    } catch (e) {
      enqueueSnackbar(i18n.t("loggedIn.user.settings.toolbar.saveError"), {
        variant: "error",
      });
    }
  };

  const onSubmit = handleSubmit(handeUserSettingsUpdate);

  /*changing the password is waiting for the login implementation*/
  return (
    <>
      <Stack direction="row" spacing={2} sx={{ pt: 10 }}>
        <Button
          variant="contained"
          color="success"
          sx={{ textTransform: "none" }}
          onClick={onSubmit}
        >
          {i18n.t("loggedIn.user.settings.toolbar.save")}
        </Button>
        <Link href={"/dashboard"}>
          {" "}
          <Button
            variant="contained"
            color="primary"
            sx={{ textTransform: "none" }}
          >
            {i18n.t("loggedIn.user.settings.toolbar.changePassword")}
          </Button>
        </Link>
      </Stack>
    </>
  );
};
