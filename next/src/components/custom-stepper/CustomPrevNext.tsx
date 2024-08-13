import i18n from "@/locales/i18n";
import { Button, Stack } from "@mui/material";
import Iconify from "../iconify";
import { PrevNextStepProps } from "./types";

// ----------------------------------------------------------------------

export const CustomPrevNext = ({
  currentStep,
  onNextStep,
  onPrevStep,
}: PrevNextStepProps) => {
  return (
    <Stack
      direction={"row"}
      sx={{ pt: 3, pb: 3 }}
      justifyContent={"space-between"}
    >
      {currentStep > 0 ? (
        <Button
          disableRipple
          startIcon={<Iconify icon="ic:round-arrow-back-ios" />}
          onClick={onPrevStep}
        >
          {i18n.t("loggedIn.createEvent.prevNextStep.previousStep")}
        </Button>
      ) : (
        <div></div>
      )}

      {currentStep < 2 ? (
        <Button
          disableRipple
          endIcon={<Iconify icon="ic:round-arrow-forward-ios" />}
          onClick={onNextStep}
        >
          {i18n.t("loggedIn.createEvent.prevNextStep.nextStep")}
        </Button>
      ) : (
        <div></div>
      )}
    </Stack>
  );
};
