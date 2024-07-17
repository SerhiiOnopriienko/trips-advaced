import { loadTrips, loadTrip } from "./actions";
import { actions, reducer } from "./slice";

const allActions = {
  ...actions,
  loadTrips,
  loadTrip,
};

export { allActions as actions, reducer };
