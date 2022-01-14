import { GET_USERS_START, GET_USRES_FAIL, GET_USRES_SUCCESS } from "../actions";

const initialState = {
  loading: false,
  data: [],
  error: null,
};

export default function users(state = initialState, action) {
  if (action.type === GET_USERS_START) {
    return {
      ...state,
      loading: true,
      error: null,
    };
  }

  if (action.type === GET_USRES_SUCCESS) {
    return {
      ...state,
      loading: false,
      data: action.data,
    };
  }

  if (action.type === GET_USRES_FAIL) {
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  }

  return state;
}
