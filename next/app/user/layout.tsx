import { Stack } from "@mui/material";

// ----------------------------------------------------------------------

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Stack sx={{ pt: 10 }}>{children}</Stack>;
}
