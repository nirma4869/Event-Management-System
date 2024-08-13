// ----------------------------------------------------------------------

export enum EventStatus {
  Open,
  OnGoing,
  Closed,
}

export type StatusColor =
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | "error"
  | undefined;
