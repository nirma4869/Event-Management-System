import i18n from "@/locales/i18n";
import { Event } from "@/models/event";
import { EventRegistration } from "@/models/eventRegistration";
import { Table } from "@/models/table";
import { Container, FormControlLabel, Switch, useTheme } from "@mui/material";
import isEmpty from "lodash/isEmpty";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { getTableColor } from "./helper";

// ----------------------------------------------------------------------

type Props = {
  selectedEvent: Event;
  methods: UseFormReturn<EventRegistration, any>;
};

// ----------------------------------------------------------------------

export const EventSignUpTableChoice = ({ selectedEvent, methods }: Props) => {
  const theme = useTheme();
  const { enqueueSnackbar } = useSnackbar();
  const [isCapacityShown, setIsCapacityShown] = useState(false);
  const [currentSelectedtable, setCurrentSelectedtable] =
    useState<Table | null>(null);

  const { setValue } = methods;
  const { tables, eventRegistrations } = selectedEvent;

  const onClickTable = (selectedTable: Table) => {
    if (selectedTable.capacity === 0) {
      enqueueSnackbar(
        i18n.t("messages.error.eventRegistrationSignUp.tableHasNoCapacity"),
        {
          variant: "info",
        }
      );
      return;
    }

    if (eventRegistrations.some((er) => er.tableId === selectedTable.id)) {
      enqueueSnackbar(
        i18n.t("messages.error.eventRegistrationSignUp.tableAlreadyOccupied"),
        {
          variant: "info",
        }
      );
      return;
    }

    setCurrentSelectedtable(selectedTable);

    setValue(`tableId`, selectedTable.id);
  };

  return (
    <Container sx={{ width: 1, pt: 3 }}>
      <FormControlLabel
        control={
          <Switch onChange={() => setIsCapacityShown(!isCapacityShown)} />
        }
        labelPlacement="start"
        label={i18n.t(
          `loggedIn.eventSignUp.stepOne.showCapacity.${isCapacityShown}`
        )}
      />
      <div
        className="elements"
        style={{
          position: "relative",
          width: "100%",
          height: "1000px",
          border: "3px solid #ccc",
        }}
      >
        {!isEmpty(tables) && (
          <>
            {tables.map((table) => {
              const { id, origin, publicId, rotation, capacity } = table;
              return (
                <div
                  key={id}
                  id={id.toString()}
                  onClick={() => onClickTable(table)}
                  style={{
                    transform: `rotate(${rotation}deg)`,
                    width: `${origin[2]}px`,
                    height: `${origin[3]}px`,
                    left: `${origin[0]}px`,
                    top: `${origin[1]}px`,
                    backgroundColor: getTableColor(
                      eventRegistrations,
                      table,
                      currentSelectedtable,
                      theme
                    ),
                    alignContent: "flex-start",
                    textAlign: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    border: "2px solid #333",
                    position: "absolute",
                  }}
                >
                  {publicId}
                  <br />
                  {isCapacityShown &&
                    table.capacity != 0 &&
                    i18n.t(`loggedIn.eventSignUp.stepOne.showCapacity.text`, {
                      capacity,
                    })}
                </div>
              );
            })}
          </>
        )}
      </div>
    </Container>
  );
};

export default EventSignUpTableChoice;

// ----------------------------------------------------------------------
