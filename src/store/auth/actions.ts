import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";

import { AsyncThunkConfig } from "../../common/types/types";
import { name } from "./slice";
import { AuthUser } from "../../types/types";

const loadUser = createAsyncThunk<AuthUser, void, AsyncThunkConfig>(
  `${name}/user`,
  async (_payload, { extra }) => {
    const { authService } = extra;

    const user = await authService.getUser();

    return user;
  }
);

const signUp: AsyncThunk<
  string,
  {
    fullName: string;
    email: string;
    password: string;
  },
  AsyncThunkConfig
> = createAsyncThunk<
  string,
  {
    fullName: string;
    email: string;
    password: string;
  },
  AsyncThunkConfig
>(`${name}/sign-up`, async (payload, { extra }) => {
  const { authService } = extra;

  const token = await authService.signUp(payload);
  return token;
});

const signIn: AsyncThunk<
  string,
  {
    email: string;
    password: string;
  },
  AsyncThunkConfig
> = createAsyncThunk<
  string,
  {
    email: string;
    password: string;
  },
  AsyncThunkConfig
>(`${name}/sign-in`, async (payload, { extra }) => {
  const { authService } = extra;

  const token = await authService.signIn(payload);
  return token;
});

const signOut: AsyncThunk<null, void, AsyncThunkConfig> = createAsyncThunk(
  `${name}/sign-out`,
  async (_payload, { extra }) => {
    const { authService } = extra;

    await authService.signOut();

    return null;
  }
);

export { loadUser, signUp, signIn, signOut };
