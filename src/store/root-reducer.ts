import { reducer as tripsReducer } from "./trips/trips";
import { reducer as bookingReducer } from "./bookings/bookings";
import { reducer as authReducer } from "./auth/auth";

const rootReducer = {
  trips: tripsReducer,
  bookings: bookingReducer,
  auth: authReducer,
};

export { rootReducer };
