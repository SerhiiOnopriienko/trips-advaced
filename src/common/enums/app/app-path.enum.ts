const AppPath = {
  AUTH_SIGNIN: "/auth/sign-in",
  AUTH_SIGNUP: "auth/sign-up",
  ROOT: "/",
  TRIPS: "/trips",
  TRIPS_$ID: "/trips/:id",
  BOOKINGS: "/bookings",
  ANY: "*",
} as const;

export { AppPath };
