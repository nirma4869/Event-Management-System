"use client";

import { CustomAppBar } from "@/components/custom-app-bar";
import "react-quill/dist/quill.snow.css";

import ThemeLocalization from "@/locales/ThemeLocalization";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Provider as ReduxProvider } from "react-redux";

import EventContextProvider from "@/context/EventContextProvider";
import { useLocales } from "@/locales";
import { persistor, store } from "@/redux/store";
import ThemeProvider from "@/theme";
import { SnackbarProvider } from "notistack";
import { PersistGate } from "redux-persist/integration/react";

// ----------------------------------------------------------------------

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { currentLang } = useLocales();

  return (
    <html lang="de">
      <body>
        <ReduxProvider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <LocalizationProvider
              dateAdapter={AdapterDateFns}
              adapterLocale={currentLang.dateFns}
            >
              <ThemeProvider>
                <ThemeLocalization>
                  <SnackbarProvider>
                    <EventContextProvider>
                      <CustomAppBar />
                      {children}
                    </EventContextProvider>
                  </SnackbarProvider>
                </ThemeLocalization>
              </ThemeProvider>
            </LocalizationProvider>
          </PersistGate>
        </ReduxProvider>
      </body>
    </html>
  );
}
