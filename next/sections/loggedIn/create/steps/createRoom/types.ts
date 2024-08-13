import { Dispatch, SetStateAction } from "react";

// ----------------------------------------------------------------------

export type CustomEventTableProps = {
  currentSelectedTableId: string | undefined;
  setCurrentSelectedTableId: Dispatch<SetStateAction<string | undefined>>;
};
