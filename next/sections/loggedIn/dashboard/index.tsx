"use client";

import { useEventContext } from "@/context/EventContext";
import { fetchEvents } from "@/redux/slices/event";
import { fetchUserData } from "@/redux/slices/user";
import { useDispatch } from "@/redux/store";
import { Container, Divider } from "@mui/material";
import isEmpty from "lodash/isEmpty";
import { useEffect } from "react";
import AllEvents from "./all-events/AllEvents";
import OrganizedEvents from "./organized-events/OrganizedEvents";
import SignedUpEvents from "./signed-up-events/SignedUpEvents";

// ----------------------------------------------------------------------

export const DashboardPageContent = () => {
  const { events, user } = useEventContext();
  const dispatch = useDispatch();

  const userOrganizedEvents = events?.filter(
    (event) => event.organizerUsername === user?.username
  );

  const userSignedUpEvents = events?.filter((event) =>
    user?.eventRegistrations.some((er) => er.eventId === event.id)
  );

  const userEvents = events?.filter(
    (event) =>
      userOrganizedEvents?.includes(event) ||
      userSignedUpEvents?.includes(event)
  );

  useEffect(() => {
    dispatch(fetchUserData());
    dispatch(fetchEvents());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {userOrganizedEvents && userSignedUpEvents && events && userEvents && (
        <Container sx={{ pt: 15 }}>
          <OrganizedEvents organizedEvents={userOrganizedEvents} />
          <Divider sx={{ borderBottomWidth: 3, p: 3 }} />
          {!isEmpty(userSignedUpEvents) && (
            <>
              <SignedUpEvents signedUpEvents={userSignedUpEvents} />
              <Divider sx={{ borderBottomWidth: 3, p: 3 }} />
            </>
          )}

          <AllEvents events={events} userEvents={userEvents} />
        </Container>
      )}
    </>
  );
};

export default DashboardPageContent;
