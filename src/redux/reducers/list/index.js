import { UserType } from "../../actions";
import * as types from "../../types";

const initialState = {
    page: 1,
    search: "",
};

export const userReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case types.GET_USER_REQUEST:
      return {
        ...state,
        page: action.payload.page,
        search: action.payload.search,

      };
    case types.GET_USER_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case types.GET_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default: return state
  }
};
