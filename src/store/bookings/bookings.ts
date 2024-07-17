import { loadBookings, createBooking, deleteBooking } from "./actions";
import { actions, reducer } from "./slice";

const allActions = {
  ...actions,
  loadBookings,
  createBooking,
  deleteBooking,
};

export { allActions as actions, reducer };
