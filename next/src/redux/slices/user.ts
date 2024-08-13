import { User } from "@/models/user";
import { UserData } from "@/models/userData";
import { AppThunk } from "@/redux/store";
import { PayloadAction, createAction, createSlice } from "@reduxjs/toolkit";

// ----------------------------------------------------------------------

export type AsyncCallStatus = "idle" | "loading" | "succeeded" | "failed";

export type UserState = {
  user: UserData | undefined;
  status: { fetch: AsyncCallStatus; update: AsyncCallStatus };
  error: { fetch: Error | string | null; update: Error | string | null };
};

// ----------------------------------------------------------------------

export const initialState: UserState = {
  user: undefined,
  status: { fetch: "idle", update: "idle" },
  error: { fetch: null, update: null },
};

// ----------------------------------------------------------------------

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchUserDataStarted: (state) => {
      state.status.fetch = "loading";
    },
    fetchUserDataFailed: (state) => {
      state.status.fetch = "failed";
    },
    fetchUserDataSucceeded: (state, action: PayloadAction<UserData>) => {
      state.status.fetch = "succeeded";
      state.user = action.payload;
    },
    updateUserStarted: (state) => {
      state.status.update = "loading";
    },
    updateUserFailed: (state, action) => {
      state.status.update = "failed";
      state.error.update = action.payload;
    },
    updateUserSucceeded: (state, action: PayloadAction<User>) => {
      state.status.update = "succeeded";
      state.user = action.payload;
    },
  },
});

export default slice.reducer;

// Actions
// ----------------------------------------------------------------------

export const resetAction = createAction("RESET");

// App Thunks
// ----------------------------------------------------------------------

export const fetchUserData = (): AppThunk => async (dispatch) => {
  dispatch(slice.actions.fetchUserDataStarted());

  try {
    const response = await fetch("/api/user/info", { method: "GET" });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    dispatch(slice.actions.fetchUserDataSucceeded(data.data));
    return Promise.resolve(data.data);
  } catch (error: any) {
    dispatch(slice.actions.fetchUserDataFailed(error));
    return Promise.reject(error);
  }
};

export const updateUser =
  (user: User): AppThunk =>
  async (dispatch) => {
    dispatch(slice.actions.updateUserStarted());
    let response;
    try {
      user.username = "test";
      response = await fetch("../api/user/settings/update", {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status !== 200) {
        throw new Error(response.statusText);
      }
    } catch (error) {
      dispatch(slice.actions.updateUserFailed(error));
      throw error;
    }

    dispatch(slice.actions.updateUserSucceeded(user));
  };
