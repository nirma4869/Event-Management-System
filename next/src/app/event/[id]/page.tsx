import { EventDetailsPageContent } from "@/sections/loggedOut/details";

// ----------------------------------------------------------------------

const EventDetailsPage = ({ params: { id } }: { params: { id: number } }) => {
  return <EventDetailsPageContent eventId={id} />;
};

export default EventDetailsPage;
