import { useEffect, useReducer } from "react";
import { fetchLocation } from "../services/api";
import reducer, { initialState, StatusType } from "../state/store";

const useFetch = (ip: string) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const getLocation = async () => {
    dispatch({
      type: StatusType.FETCH_DATA_REQUEST,
    });
    try {
      const location = await fetchLocation(ip);
      dispatch({
        type: StatusType.FETCH_DATA_SUCCESS,
        payload: location,
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch({
          type: StatusType.FETCH_DATA_FAILURE,
          payload: error,
        });
      }
    }
  };
  useEffect(() => {
    getLocation();
  }, [ip]);
  return { ...state };
};
export default useFetch;
