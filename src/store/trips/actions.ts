import { createAsyncThunk } from "@reduxjs/toolkit";

import { AsyncThunkConfig } from "../../common/types/types";
import { Trip } from "../../types/types";
import { name } from "./slice.ts";

const loadTrips = createAsyncThunk<Trip[], void, AsyncThunkConfig>(
  `${name}/load-trips`,
  async (_payload, { extra }) => {
    const { tripsService } = extra;

    const trips = await tripsService.getAll();

    return trips;
  }
);

const loadTrip = createAsyncThunk<Trip, string, AsyncThunkConfig>(
  `${name}/load-trip`,
  async (payload, { extra }) => {
    const { tripsService } = extra;

    const trip = await tripsService.getById(payload);

    return trip;
  }
);

export { loadTrips, loadTrip };
