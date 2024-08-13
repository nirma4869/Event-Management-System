import { EventRegistration } from "@/models/eventRegistration";
import { Table } from "@/models/table";
import { Theme } from "@mui/material";

// ----------------------------------------------------------------------

export const getTableColor = (
  eventRegistrations: EventRegistration[],
  table: Table,
  selectedTable: Table | null,
  theme: Theme
) => {
  if (eventRegistrations.some((er) => er.tableId === table.id)) {
    return theme.palette.warning.main;
  }
  if (selectedTable && selectedTable.id === table.id) {
    return theme.palette.primary.light;
  }
  return "#e6e8e6";
};
