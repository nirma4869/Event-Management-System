import { useMemo } from "react";
// @mui
import { CssBaseline } from "@mui/material";
import {
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
  ThemeOptions,
  createTheme,
} from "@mui/material/styles";

import palette from "./palette";
import typography from "./typography";

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

// ----------------------------------------------------------------------

export default function ThemeProvider({ children }: Props) {
  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette: palette("light"),
      typography,
      shape: { borderRadius: 8 },
    }),
    []
  );

  const theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
