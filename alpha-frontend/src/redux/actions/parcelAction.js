import Axios from "axios";
import { api } from "../../helpers";
import {
  API_PARCEL_START,
  API_PARCEL_SUCCESS,
  API_PARCEL_FAILED,
  PARCEL_BY_ID_SUCCES,
} from "../types";

const url = api + "/parcels";

export const fetchParcels = () => {
  return async (dispatch) => {
    dispatch({
      type: API_PARCEL_START,
    });
    try {
      const response = await Axios.get(url);
      dispatch({ type: API_PARCEL_SUCCESS, payload: response.data });
    } catch (err) {
      dispatch({ type: API_PARCEL_FAILED, payload: err.message });
    }
  };
};

export const fetchParcelId = (id) => {
  return async (dispatch) => {
    dispatch({
      type: API_PARCEL_START,
    });
    try {
      const response = await Axios.get(`${url}/${id}`);
      dispatch({ type: PARCEL_BY_ID_SUCCES, payload: response.data });
    } catch (err) {
      dispatch({ type: API_PARCEL_FAILED, payload: err.message });
    }
  };
};
