import { User } from "./user";

// ----------------------------------------------------------------------

export type UserData = Omit<User, "password">;
