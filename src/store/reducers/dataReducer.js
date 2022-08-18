import { SAVE_DASHBOARD_DATA, SAVE_USERS_DATA, RESET_STATE } from "../types";

const initialState = {
  dashboard: [],
  users: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_DASHBOARD_DATA:
      return {
        ...state,
        dashboard: action.payload,
      };
    case SAVE_USERS_DATA:
      return {
        ...state,
        users: action.payload,
      };
    case RESET_STATE:
      return initialState;
    default:
      return state;
  }
};

export default dataReducer;
