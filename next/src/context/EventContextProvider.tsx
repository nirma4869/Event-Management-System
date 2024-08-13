import { useMemo } from "react";

import { useSelector } from "@/redux/store";
import { EventContext, EventContextType } from "./EventContext";

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

// ----------------------------------------------------------------------

const EventContextProvider = ({ children }: Props) => {
  const { events, filter } = useSelector((state) => state.event);
  const { user } = useSelector((state) => state.user);

  const contextValue: EventContextType = useMemo(
    () => ({ user, events, filter }),
    [user, events, filter]
  );

  return (
    <EventContext.Provider value={contextValue}>
      {children}
    </EventContext.Provider>
  );
};

export default EventContextProvider;
