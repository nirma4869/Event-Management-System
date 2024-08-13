import Iconify from "@/components/iconify";
import i18n from "@/locales/i18n";
import { localizeEventStatus } from "@/utils/enumLocalization";
import {
  Checkbox,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { sentenceCase } from "change-case";
import { DashboardToolbarProps } from "../types";

// ----------------------------------------------------------------------

export const AllEventsToolbar = ({
  isFiltered,
  filterName,
  filterStartDate,
  filterEndDate,
  filterStatus,
  statusOptions,
  onFilterName,
  onFilterStartDate,
  onFilterEndDate,
  onFilterStatus,
  onResetFilter,
}: DashboardToolbarProps) => {
  return (
    <Stack spacing={4} direction={"row"} sx={{ pb: 3 }}>
      <TextField
        size="small"
        value={filterName}
        onChange={onFilterName}
        placeholder={i18n.t(
          "loggedIn.dashboard.allEvents.toolbar.searchPlaceholder"
        )}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Iconify
                icon="ic:baseline-search"
                sx={{ color: "text.disabled" }}
              />
            </InputAdornment>
          ),
        }}
      />
      <DatePicker
        label={i18n.t("loggedIn.dashboard.allEvents.toolbar.startDate")}
        value={filterStartDate}
        format="dd.MM.yyyy"
        onChange={onFilterStartDate}
        slotProps={{ textField: { size: "small" } }}
      />
      <DatePicker
        label={i18n.t("loggedIn.dashboard.allEvents.toolbar.endDate")}
        value={filterEndDate}
        format="dd.MM.yyyy"
        onChange={onFilterEndDate}
        slotProps={{ textField: { size: "small" } }}
      />

      <FormControl sx={{ width: { xs: 1, md: 240 } }}>
        <InputLabel size="small">
          {i18n.t("loggedIn.dashboard.allEvents.toolbar.status")}
        </InputLabel>
        <Select
          multiple
          value={filterStatus}
          onChange={onFilterStatus}
          input={<OutlinedInput size="small" label="Status" />}
          renderValue={(selected) =>
            selected
              .map((value) => sentenceCase(localizeEventStatus(value)))
              .join(", ")
          }
        >
          {statusOptions.map((option) => (
            <MenuItem
              key={option.value}
              value={option.value}
              sx={{
                p: 0,
                mx: 1,
                borderRadius: 0.75,
                typography: "body2",
                textTransform: "capitalize",
              }}
            >
              <Checkbox
                disableRipple
                size="small"
                checked={filterStatus.includes(option.value)}
              />
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {isFiltered && (
        <IconButton
          disableRipple
          size="small"
          color="error"
          onClick={onResetFilter}
        >
          <Iconify icon="fluent:arrow-reset-24-filled" />
        </IconButton>
      )}
    </Stack>
  );
};

export default AllEventsToolbar;
