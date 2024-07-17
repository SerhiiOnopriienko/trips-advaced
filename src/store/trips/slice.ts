import { createSlice } from "@reduxjs/toolkit";
import { DataStatus } from "../../common/enums/enums";
import { type ValueOf } from "../../common/types/types";
import { Trip } from "../../types/types";
import { loadTrips, loadTrip } from "./actions";

type State = {
  trips: Trip[];
  currentTrip: Trip | null;
  status: ValueOf<typeof DataStatus>;
};

const initialState: State = {
  trips: [],
  currentTrip: null,
  status: DataStatus.IDLE,
};

const { reducer, actions, name } = createSlice({
  name: "trips",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadTrips.pending, (state) => {
      state.status = DataStatus.PENDING;
    });
    builder.addCase(loadTrips.fulfilled, (state, action) => {
      state.trips = action.payload;
      state.status = DataStatus.SUCCESS;
    });
    builder.addCase(loadTrips.rejected, (state) => {
      state.status = DataStatus.ERROR;
    });

    builder.addCase(loadTrip.fulfilled, (state, action) => {
      state.currentTrip = action.payload;
    });
  },
});

export { reducer, name, actions };
