import { ENV } from "../common/enums/enums";
import { Http } from "./http/http.service";
import { Trips } from "./trips/trips.service";
import { Bookings } from "./bookings/bookings.service";
import { Auth } from "./auth/auth.service";

const http = new Http();

const trips = new Trips({
  baseUrl: ENV.API.URL,
  http,
});

const bookings = new Bookings({
  baseUrl: ENV.API.URL,
  http,
});

const auth = new Auth({
  baseUrl: "https://travel-app-api.up.railway.app/api/v1/",
  http,
});

export { http, trips, bookings, auth };
