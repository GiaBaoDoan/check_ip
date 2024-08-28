import { IPInfo } from "../types/location";

export type TypeState = {
  status: boolean;
  error: Error | null;
  data: IPInfo | null;
};
export type ActionType = {
  type: StatusType;
  payload?: any;
};

export enum StatusType {
  FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST",
  FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS",
  FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE",
}

export const initialState: TypeState = {
  status: false,
  error: null,
  data: null,
};

const reducer = (state: TypeState, action: ActionType) => {
  const { type, payload } = action;
  const handlers = {
    FETCH_DATA_REQUEST: {
      ...state,
      status: true,
      error: null,
    },
    FETCH_DATA_SUCCESS: {
      ...state,
      status: false,
      data: payload,
      error: null,
    },
    FETCH_DATA_FAILURE: {
      ...state,
      status: false,
      error: payload,
    },
  };
  return handlers[type] || state;
};
export default reducer;
