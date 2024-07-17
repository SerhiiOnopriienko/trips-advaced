import { createAsyncThunk } from "@reduxjs/toolkit";

import { AsyncThunkConfig } from "../../common/types/types";
import { Booking } from "../../types/types";
import { name } from "./slice.ts";

const loadBookings = createAsyncThunk<Booking[], void, AsyncThunkConfig>(
  `${name}/load-bookings`,
  async (_payload, { extra }) => {
    const { bookingService } = extra;

    const bookings = await bookingService.getAll();

    return bookings;
  }
);

const createBooking = createAsyncThunk<
  Booking,
  { tripId: string; guests: number; date: Date },
  AsyncThunkConfig
>(`${name}/create-booking`, async (payload, { extra }) => {
  const { bookingService } = extra;

  const booking = await bookingService.create(payload);

  return booking;
});

const deleteBooking = createAsyncThunk<void, string, AsyncThunkConfig>(
  `${name}/delete-booking`,
  async (bookingId, { extra }) => {
    const { bookingService } = extra;
    await bookingService.delete(bookingId);
  }
);

export { loadBookings, createBooking, deleteBooking };
