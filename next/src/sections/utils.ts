import { Event } from "@/models/event";
import { fTimestamp } from "@/utils/formatTime";
import { eventStatus } from "@prisma/client";

// ----------------------------------------------------------------------

export function applyFilter({
  inputData,
  filterName,
  filterStartDate,
  filterEndDate,
  filterStatus,
}: {
  inputData: Event[] | undefined;
  filterName: string;
  filterStartDate: Date | null;
  filterEndDate: Date | null;
  filterStatus: eventStatus[];
}) {
  if (!inputData) {
    return undefined;
  }

  if (filterStatus.length) {
    inputData = inputData.filter((event) =>
      filterStatus.includes(event.status)
    );
  }

  if (filterName) {
    inputData = inputData.filter((event) =>
      event.eventname.includes(filterName)
    );
  }

  if (filterStartDate && filterEndDate) {
    inputData = inputData.filter(
      (event) =>
        fTimestamp(event.startTime) >= fTimestamp(filterStartDate) &&
        fTimestamp(event.endTime) <= fTimestamp(filterEndDate)
    );
  }

  return inputData;
}
