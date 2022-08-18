import { SAVE_AUTH_DATA } from "./types";

export const saveAuthData = (authData) => ({
  type: SAVE_AUTH_DATA,
  payload: authData,
});
