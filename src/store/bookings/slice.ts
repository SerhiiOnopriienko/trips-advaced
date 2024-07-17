import { createSlice } from "@reduxjs/toolkit";
import { DataStatus } from "../../common/enums/enums";
import { type ValueOf } from "../../common/types/types";
import { Booking } from "../../types/types";
import { loadBookings, createBooking, deleteBooking } from "./actions";

type State = {
  bookings: Booking[];
  status: ValueOf<typeof DataStatus>;
};

const initialState: State = {
  bookings: [],
  status: DataStatus.IDLE,
};

const { reducer, actions, name } = createSlice({
  name: "bookings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadBookings.pending, (state) => {
      state.status = DataStatus.PENDING;
    });
    builder.addCase(loadBookings.fulfilled, (state, action) => {
      state.bookings = action.payload;
      state.status = DataStatus.SUCCESS;
    });
    builder.addCase(loadBookings.rejected, (state) => {
      state.status = DataStatus.ERROR;
    });

    builder.addCase(createBooking.fulfilled, (state, action) => {
      state.bookings.push(action.payload);
    });
    builder.addCase(deleteBooking.fulfilled, (state, action) => {
      state.bookings = state.bookings.filter(
        (booking) => booking.id !== action.meta.arg
      );
    });
  },
});

export { reducer, name, actions };
