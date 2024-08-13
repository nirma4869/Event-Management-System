import { EventSignUpPageContent } from "@/sections/loggedIn/event-sign-up";

// ----------------------------------------------------------------------

const EventSignUpPage = ({ params: { id } }: { params: { id: number } }) => {
  return <EventSignUpPageContent eventId={id} />;
};

export default EventSignUpPage;
