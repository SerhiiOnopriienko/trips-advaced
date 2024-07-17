import { loadUser, signUp, signIn, signOut } from "./actions";
import { actions, reducer } from "./slice";

const allActions = {
  ...actions,
  loadUser,
  signUp,
  signIn,
  signOut,
};

export { allActions as actions, reducer };
