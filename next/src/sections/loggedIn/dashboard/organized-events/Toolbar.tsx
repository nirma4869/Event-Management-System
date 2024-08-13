import Iconify from "@/components/iconify";
import i18n from "@/locales/i18n";
import { Button, IconButton, Stack } from "@mui/material";
import Link from "next/link";

// ----------------------------------------------------------------------

type Props = {
  onNextSlide: () => void;
  onPrevSlide: () => void;
  showButtons: boolean;
};

// ----------------------------------------------------------------------

export const OrganizedEventsToolbar = ({
  onNextSlide,
  onPrevSlide,
  showButtons,
}: Props) => {
  return (
    <Stack
      direction={"row"}
      sx={{ pb: 1, m: 2, justifyContent: "space-between" }}
    >
      <Link href={"/create-event"}>
        <Button
          variant="contained"
          color="primary"
          sx={{ textTransform: "none" }}
          disableRipple
        >
          {i18n.t("loggedIn.dashboard.organizedEvents.toolbar.createNew")}
        </Button>
      </Link>
      {showButtons && (
        <Stack direction={"row"}>
          <IconButton onClick={onPrevSlide}>
            <Iconify icon="ic:round-arrow-back-ios" />
          </IconButton>
          <IconButton onClick={onNextSlide}>
            <Iconify icon="ic:round-arrow-forward-ios" />
          </IconButton>
        </Stack>
      )}
    </Stack>
  );
};

export default OrganizedEventsToolbar;
