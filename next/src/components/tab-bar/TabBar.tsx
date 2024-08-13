"use client";

import i18n from "@/locales/i18n";
import { TabContext, TabList } from "@mui/lab";
import { Container, Tab } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getTabValueFromUrl } from "./helper";

// ----------------------------------------------------------------------

export const TabBar = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [value, setValue] = useState(getTabValueFromUrl(pathname));

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  useEffect(() => {
    setValue(getTabValueFromUrl(pathname));
  }, [pathname]);

  return (
    <Container>
      <TabContext value={value}>
        <TabList onChange={handleTabChange} centered>
          <Tab
            label={i18n.t("loggedOut.tabs.info.label")}
            value="0"
            disableRipple
            sx={{ mr: 4 }}
            href="/"
            LinkComponent={Link}
          />
          <Tab
            label={i18n.t("loggedOut.tabs.create.label")}
            value="1"
            disableRipple
            sx={{ mr: 4, ml: 4 }}
            href="/create-preview"
            LinkComponent={Link}
          />
          <Tab
            label={i18n.t("loggedOut.tabs.login.label")}
            value="2"
            disableRipple
            sx={{ mr: 4, ml: 4 }}
            href="/login"
            LinkComponent={Link}
          />
          <Tab
            label={i18n.t("loggedOut.tabs.signUp.label")}
            value="3"
            disableRipple
            sx={{ ml: 4 }}
            href="/sign-up"
            LinkComponent={Link}
          />
        </TabList>
      </TabContext>
      {children}
    </Container>
  );
};
