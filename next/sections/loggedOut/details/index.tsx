"use client";

import Iconify from "@/components/iconify";
import Label from "@/components/label";
import { TextIcon } from "@/components/text-icon";
import { useEventContext } from "@/context/EventContext";
import i18n from "@/locales/i18n";
import { Event } from "@/models/event";
import {
  getEventStatusColor,
  localizeEventStatus,
} from "@/utils/enumLocalization";
import { fPeriod } from "@/utils/formatTime";
import {
  Button,
  Card,
  Container,
  Divider,
  Stack,
  StackProps,
  Typography,
  TypographyProps,
  useTheme,
} from "@mui/material";
import Link from "next/link";

// ----------------------------------------------------------------------

type Props = {
  eventId: number;
};

// ----------------------------------------------------------------------

export const EventDetailsPageContent = ({ eventId }: Props) => {
  const theme = useTheme();
  const { events } = useEventContext();

  const currentEvent = events?.find((event) => eventId == event.id) as Event;

  const {
    eventname,
    description,
    status,
    contactInformation,
    startTime,
    endTime,
    adress,
    zip,
    city,
    country,
    tables,
  } = currentEvent;

  const tablesWithCapacity = tables.filter((table) => table.capacity > 0);

  const commonStackProps: StackProps = {
    direction: "row",
    spacing: 1,
    alignItems: "center",
  };
  const commonTextProps: TypographyProps = { variant: "h5" };

  return (
    <Container sx={{ pt: 15 }}>
      <Card
        sx={{ p: 3 }}
        style={{ borderRadius: 20, backgroundColor: theme.palette.grey[100] }}
      >
        <Link href={"/"}>
          <Button
            disableRipple
            startIcon={<Iconify icon="ic:round-arrow-back-ios" />}
          >
            {i18n.t("loggedOut.tabs.info.eventDetails.back")}
          </Button>
        </Link>

        <Stack>
          <Stack direction={"column"} alignItems={"center"}>
            <Typography variant="h3" sx={{ pb: 2 }}>
              {eventname}
            </Typography>

            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={7}
              sx={{ pb: 5 }}
            >
              <Stack direction={"row"} spacing={2}>
                <Iconify icon={"fa6-solid:user-group"} color={"grey.700"} />
                <Typography style={{ fontWeight: "bold" }}>
                  {i18n.t("loggedOut.tabs.info.eventDetails.availableTables")}
                </Typography>
                <Typography>{tablesWithCapacity.length}</Typography>
              </Stack>

              <Stack direction={"row"} spacing={2}>
                <Typography style={{ fontWeight: "bold" }}>
                  {i18n.t("loggedOut.tabs.info.eventDetails.status")}
                </Typography>
                <Label
                  variant="soft"
                  sx={{ textTransform: "none" }}
                  color={getEventStatusColor(status)}
                >
                  {localizeEventStatus(status)}
                </Label>
              </Stack>
            </Stack>
          </Stack>

          <Stack spacing={2} sx={{ pt: 3, pb: 2 }}>
            <TextIcon
              text={i18n.t("loggedOut.tabs.info.eventDetails.description")}
              stackProps={commonStackProps}
              textProps={commonTextProps}
              iconProps={{
                side: "left",
                icon: <Iconify icon="fluent:text-description-16-filled" />,
              }}
            />
            {!description || description === "" ? (
              <Typography
                color={theme.palette.grey[600]}
                sx={{ fontStyle: "italic" }}
              >
                {i18n.t("loggedOut.tabs.info.eventDetails.noDescription")}
              </Typography>
            ) : (
              <Typography variant="body1" textAlign="justify">
                {description}
              </Typography>
            )}
          </Stack>

          <Divider />

          <Stack spacing={2} sx={{ pt: 3, pb: 2 }}>
            <TextIcon
              text={i18n.t("loggedOut.tabs.info.eventDetails.dateRange")}
              stackProps={commonStackProps}
              textProps={commonTextProps}
              iconProps={{
                side: "left",
                icon: <Iconify icon="mdi:calendar-clock" color={"info.main"} />,
              }}
            />
            <Typography variant="body1">
              {fPeriod(startTime, endTime).toString()}
            </Typography>
          </Stack>

          <Divider />

          <Stack spacing={2} sx={{ pt: 3, pb: 2 }}>
            <TextIcon
              text={i18n.t("loggedOut.tabs.info.eventDetails.address")}
              stackProps={commonStackProps}
              textProps={commonTextProps}
              iconProps={{
                side: "left",
                icon: <Iconify icon="ph:map-pin-fill" color={"error.main"} />,
              }}
            />
            <Typography variant="body1">
              {i18n.t("loggedOut.tabs.info.eventDetails.addressValue", {
                adress,
                zip,
                city,
                country,
              })}
            </Typography>
          </Stack>

          <Divider />

          <Stack sx={{ pt: 3, pb: 2 }}>
            <TextIcon
              text={i18n.t("loggedOut.tabs.info.eventDetails.contact")}
              stackProps={commonStackProps}
              textProps={commonTextProps}
              iconProps={{
                side: "left",
                icon: <Iconify icon="mdi:contact" color={"warning.main"} />,
              }}
            />

            <Stack spacing={1} sx={{ pt: 2 }}>
              {!contactInformation || contactInformation === "" ? (
                <Typography
                  color={theme.palette.grey[600]}
                  sx={{ fontStyle: "italic" }}
                >
                  {i18n.t("loggedOut.tabs.info.eventDetails.noContact")}
                </Typography>
              ) : (
                <TextIcon
                  text={contactInformation}
                  iconProps={{
                    icon: <Iconify icon={"mdi:email"} />,
                    side: "left",
                  }}
                  stackProps={commonStackProps}
                  textProps={{ variant: "body1" }}
                />
              )}
            </Stack>
          </Stack>
        </Stack>
      </Card>
    </Container>
  );
};

export default EventDetailsPageContent;
