import {
  Button,
  CardContent,
  Divider,
  Stack,
  StackProps,
  Typography,
} from "@mui/material";

import Iconify from "@/components/iconify";
import i18n from "@/locales/i18n";
import {
  getEventStatusColor,
  localizeEventStatus,
} from "@/utils/enumLocalization";
import { fPeriod } from "@/utils/formatTime";
import Link from "next/link";
import Label from "../label";
import { TextIcon, TextIconProps } from "../text-icon";
import { EventCardProps } from "./types";

// ----------------------------------------------------------------------

export const EventCardContent = ({ event, isLoggedIn }: EventCardProps) => {
  const { id, eventname, startTime, endTime, city, tables, status } = event;

  const tablesWithCapacity = tables.filter((table) => table.capacity > 0);

  const stackProps: StackProps = {
    direction: "row",
    alignItems: "center",
    pb: 2,
    spacing: 1,
  };

  const TEXT_ICON_FIELDS: TextIconProps[] = [
    {
      text: fPeriod(startTime, endTime),
      iconProps: {
        icon: <Iconify icon="mdi:calendar-clock" sx={{ color: "info.main" }} />,
        side: "left",
      },
      stackProps: { ...stackProps, pt: 2 },
    },
    {
      text: tablesWithCapacity.length.toString(),
      iconProps: {
        icon: <Iconify icon="fa6-solid:user-group" color={"grey.700"} />,
        side: "left",
      },
      stackProps,
    },
    {
      text: city,
      iconProps: {
        icon: <Iconify icon="ph:map-pin-fill" color={"error.main"} />,
        side: "left",
      },
      stackProps,
    },
  ];

  return (
    <CardContent>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography variant="h6" fontWeight={"bold"}>
          {eventname}
        </Typography>
        <Label
          variant="soft"
          sx={{ textTransform: "none" }}
          color={getEventStatusColor(status)}
        >
          {localizeEventStatus(status)}
        </Label>
      </Stack>

      <Divider sx={{ p: 1 }} />

      {TEXT_ICON_FIELDS.map((field) => (
        <TextIcon
          key={field.text}
          text={field.text}
          iconProps={field.iconProps}
          stackProps={field.stackProps}
          textProps={field.textProps}
        />
      ))}

      <Stack
        direction={"row"}
        spacing={1}
        style={{
          display: "flex",
          justifyContent: isLoggedIn ? "space-between" : "flex-end",
        }}
      >
        {isLoggedIn && (
          <Link href={`/event-sign-up/${event.id}`}>
            <Button color="primary">
              {i18n.t("loggedOut.tabs.info.eventCard.signUp")}
            </Button>
          </Link>
        )}

        <Link href={`/event/${id}`}>
          <Button
            color="primary"
            endIcon={<Iconify icon="ic:round-arrow-forward-ios" />}
          >
            {i18n.t("loggedOut.tabs.info.eventCard.moreInfo")}
          </Button>
        </Link>
      </Stack>
    </CardContent>
  );
};
