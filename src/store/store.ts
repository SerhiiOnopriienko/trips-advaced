import { configureStore } from "@reduxjs/toolkit";

import { trips as tripsService } from "../services/services";
import { bookings as bookingService } from "../services/services";
import { auth as authService } from "../services/services";
import { rootReducer } from "./root-reducer";

const extraArgument = {
  tripsService,
  bookingService,
  authService,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument,
      },
    }),
});

export { store, extraArgument };
