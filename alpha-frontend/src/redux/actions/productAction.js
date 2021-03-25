import Axios from "axios";
import { api } from "../../helpers";
import {
  API_PRODUCT_START,
  API_PRODUCT_SUCCESS,
  API_PRODUCT_FAILED,
} from "../types";

const url = api + "/products";

export const fetchProduct = () => {
  return async (dispatch) => {
    dispatch({
      type: API_PRODUCT_START,
    });
    try {
      const response = await Axios.get(url);
      dispatch({ type: API_PRODUCT_SUCCESS, payload: response.data });
    } catch (err) {
      dispatch({
        type: API_PRODUCT_FAILED,
        payload: err.message,
      });
    }
  };
};

export const productById = (id) => {
  return async (dispatch) => {
    dispatch({
      type: API_PRODUCT_START,
    });
    try {
      const response = await Axios.get(`${url}/${id}`);
      dispatch({
        type: API_PRODUCT_SUCCESS,
        payload: response.data,
      });
    } catch (err) {
      dispatch({
        type: API_PRODUCT_FAILED,
        payload: err.message,
      });
    }
  };
};

export const changeIsCheckedAction = (id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: API_PRODUCT_START,
      });
      await Axios.patch(`${url}/change-ischecked/${id}`);
      console.log("eaea");
      dispatch({
        type: API_PRODUCT_SUCCESS,
      });
    } catch (err) {
      dispatch({ type: API_PRODUCT_FAILED, payload: err.message });
    }
  };
};
