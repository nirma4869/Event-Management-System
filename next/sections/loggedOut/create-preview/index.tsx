"use client";

import {
  EventStepDescription,
  EventStepDescriptionProps,
} from "@/components/event-step-description";
import i18n from "@/locales/i18n";
import { Container, Stack, Typography, useTheme } from "@mui/material";
import { Trans } from "next-i18next";
import Link from "next/link";

// ----------------------------------------------------------------------

export const CreateEventPreviewPageContent = () => {
  const theme = useTheme();

  const DESCRIPTION_FIELDS: EventStepDescriptionProps[] = [
    {
      title: i18n.t("loggedOut.tabs.create.steps.stepOne.title"),
      description: i18n.t("loggedOut.tabs.create.steps.stepOne.description"),
      divider: "bottom",
    },
    {
      title: i18n.t("loggedOut.tabs.create.steps.stepTwo.title"),
      description: i18n.t("loggedOut.tabs.create.steps.stepTwo.description"),
      divider: "bottom",
    },
    {
      title: i18n.t("loggedOut.tabs.create.steps.stepThree.title"),
      description: i18n.t("loggedOut.tabs.create.steps.stepThree.description"),
    },
  ];

  return (
    <Container sx={{ pt: 15 }}>
      <Stack justifyContent={"center"} alignItems={"center"}>
        <Stack justifyContent={"center"} alignItems={"center"} spacing={1}>
          <Typography variant="h3" color={theme.palette.primary.main}>
            {i18n.t("loggedOut.tabs.create.title.label")}
          </Typography>
          <Stack direction={"row"} spacing={0.5}>
            <Trans
              i18nKey={i18n.t("loggedOut.tabs.create.title.subText")}
              components={{
                1: <Typography variant="body2" />,
                2: (
                  <Typography
                    variant="body2"
                    component={Link}
                    href={"/login"}
                    sx={{
                      "&:hover": {
                        textDecoration: "underline",
                      },
                      textDecoration: "none",
                      color: theme.palette.primary.main,
                    }}
                  />
                ),
              }}
            />
          </Stack>
        </Stack>

        {DESCRIPTION_FIELDS.map((field) => (
          <EventStepDescription key={field.title} {...field} />
        ))}
      </Stack>
    </Container>
  );
};

export default CreateEventPreviewPageContent;
