import Iconify from "@/components/iconify";
import { IconButton, Stack } from "@mui/material";

// ----------------------------------------------------------------------

type Props = {
  onNextSlide: () => void;
  onPrevSlide: () => void;
};

// ----------------------------------------------------------------------

export const SignedUpEventsToolbar = ({ onNextSlide, onPrevSlide }: Props) => {
  return (
    <Stack direction={"row"} justifyContent={"flex-end"} sx={{ pb: 1, m: 2 }}>
      <IconButton onClick={onPrevSlide}>
        <Iconify icon="ic:round-arrow-back-ios" />
      </IconButton>
      <IconButton onClick={onNextSlide}>
        <Iconify icon="ic:round-arrow-forward-ios" />
      </IconButton>
    </Stack>
  );
};

export default SignedUpEventsToolbar;
