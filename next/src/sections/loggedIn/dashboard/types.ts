import { SelectChangeEvent } from "@mui/material";
import { eventStatus } from "@prisma/client";
import { ChangeEvent } from "react";

// ----------------------------------------------------------------------

export type DashboardToolbarProps = {
  isFiltered: boolean;
  filterName: string;
  filterStartDate: Date | null;
  filterEndDate: Date | null;
  filterStatus: eventStatus[];
  statusOptions: { value: eventStatus; label: string }[];
  onFilterName: (event: ChangeEvent<HTMLInputElement>) => void;
  onFilterStartDate: (value: Date | null) => void;
  onFilterEndDate: (value: Date | null) => void;
  onFilterStatus: (event: SelectChangeEvent<eventStatus[]>) => void;
  onResetFilter: VoidFunction;
};
