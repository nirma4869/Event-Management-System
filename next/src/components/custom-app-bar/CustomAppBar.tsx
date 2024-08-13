"use client";

import i18n from "@/locales/i18n";
import { resetAction } from "@/redux/slices/user";
import { dispatch, useSelector } from "@/redux/store";
import { bgBlur } from "@/utils/cssStyles";
import { AppBar, Button, Toolbar, Typography, useTheme } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import { CustomButtonNavigation } from "../custom-button-navigation";

// ----------------------------------------------------------------------

export const CustomAppBar = () => {
  const theme = useTheme();
  const path = usePathname();
  const router = useRouter();
  const { user } = useSelector((state) => state.user);
  const { enqueueSnackbar } = useSnackbar();

  const isPublicPath =
    path === "/create-preview" ||
    path === "/" ||
    path.startsWith("/event/") ||
    path === "/login" ||
    path === "/sign-up";

  const onLogOut = async () => {
    try {
      const response = await fetch("/api/user/logout", {
        method: "GET",
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      } else {
        router.push("/");
        dispatch(resetAction());
      }
    } catch (error) {
      enqueueSnackbar(i18n.t(`messages.error.logout`), {
        variant: "error",
      });
    }
  };

  return (
    <AppBar
      color="transparent"
      sx={{
        pt: 1,
        boxShadow: "none",
        zIndex: theme.zIndex.appBar + 1,
        ...bgBlur({ color: theme.palette.background.default }),
        transition: theme.transitions.create(["height"], {
          duration: theme.transitions.duration.short,
        }),
      }}
    >
      <Toolbar sx={{ m: 1 }}>
        <Typography variant="h5" color="primary" sx={{ flexGrow: 1 }}>
          {"Ree(n)vent"}
        </Typography>
        {isPublicPath && !user ? (
          <>
            <CustomButtonNavigation />
            <Typography variant="h5" sx={{ flexGrow: 1, visibility: "hidden" }}>
              {"Ree(n)vent"}
            </Typography>
          </>
        ) : (
          <Button
            color="error"
            disableRipple
            onClick={onLogOut}
            style={{ backgroundColor: "transparent" }}
            sx={{
              flexGrow: 1,
              justifyContent: "flex-end",
            }}
          >
            {i18n.t("loggedIn.logOut")}
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};
