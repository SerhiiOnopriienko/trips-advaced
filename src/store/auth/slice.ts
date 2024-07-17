import { createSlice } from "@reduxjs/toolkit";
import { DataStatus } from "../../common/enums/enums";
import { type ValueOf } from "../../common/types/types";
import { signUp, signIn, signOut, loadUser } from "./actions";

type State = {
  token: string | null;
  user: string;
  status: ValueOf<typeof DataStatus>;
  error: string | null;
};

const initialState: State = {
  token: localStorage.getItem("token") || null,
  user: "",
  status: DataStatus.IDLE,
  error: null,
};

const { reducer, actions, name } = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadUser.fulfilled, (state, action) => {
      state.status = DataStatus.SUCCESS;
      state.user = action.payload.fullName;
    });
    builder.addCase(signUp.pending, (state) => {
      state.status = DataStatus.PENDING;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user.fullName;
      state.status = DataStatus.SUCCESS;
    });
    builder.addCase(signUp.rejected, (state) => {
      state.status = DataStatus.ERROR;
    });

    builder.addCase(signIn.pending, (state) => {
      state.status = DataStatus.PENDING;
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user.fullName;
      state.status = DataStatus.SUCCESS;
      state.error = null;
    });
    builder.addCase(signIn.rejected, (state, action) => {
      state.status = DataStatus.ERROR;
      state.error = action.payload as string;
    });

    builder.addCase(signOut.fulfilled, (state) => {
      state.token = "";
      state.user = "";
      state.status = DataStatus.IDLE;
      state.error = null;
    });
  },
});

export { reducer, name, actions };
