import { Card, CardMedia, useTheme } from "@mui/material";
import Image from "next/image";

import noImageUrlProvided from "../../../public/noImageUrlProvided.png";
import { EventCardContent } from "./EventCardContent";
import { EventCardProps } from "./types";

// ----------------------------------------------------------------------

export const EventCard = ({ event, isLoggedIn, cardSx }: EventCardProps) => {
  const theme = useTheme();
  const { imageUrl } = event;

  return (
    <Card
      {...cardSx}
      style={{
        borderRadius: 20,
        backgroundColor: theme.palette.grey[100],
        flex: 1,
      }}
    >
      <CardMedia sx={{ position: "relative", height: "200px", m: 2 }}>
        <Image
          src={!imageUrl || imageUrl === "" ? noImageUrlProvided : imageUrl}
          alt="Event Image"
          fill
          sizes="100%"
          style={{
            borderRadius: 20,
            objectFit: "cover",
          }}
        />
      </CardMedia>

      <EventCardContent event={event} isLoggedIn={isLoggedIn} />
    </Card>
  );
};
