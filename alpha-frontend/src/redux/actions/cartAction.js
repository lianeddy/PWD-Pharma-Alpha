import axios from "axios";
import { api } from "../../helpers";
import { ADD_TO_CART, ADD_TO_CART_SUCCESS } from "../types";

const url = api + "/cart";

export const addToCartAction = (data) => {
  return async (dispatch) => {
    try {
      // loading star
      // dispatch({
      //   type: ADD_TO_CART_SUCCESS,
      //   payload: data,
      // });
      await axios.post(`${url}`, data);
      dispatch({
        type: ADD_TO_CART_SUCCESS,
        payload: data,
      });
    } catch (err) {
      // FAILED
      // dispatch({
      //   type: ADD_TO_CART_SUCCESS,
      //   payload: data,
      // });
    }
  };
};

export const getCartAction = (user_id) => {
  return async (dispatch) => {
    try {
      // loading star
      // dispatch({
      //   type: ADD_TO_CART_SUCCESS,
      //   payload: data,
      // });
      const response = await axios.get(`${url}/${user_id}`);
      dispatch({
        type: ADD_TO_CART_SUCCESS,
        payload: response,
      });
    } catch (err) {
      // FAILED
      // dispatch({
      //   type: ADD_TO_CART_SUCCESS,
      //   payload: data,
      // });
    }
  };
};
