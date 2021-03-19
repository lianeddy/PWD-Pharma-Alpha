import Axios from "axios";
import { api } from "../../helpers";
import {
  API_USER_START,
  API_USER_FAILED,
  API_USER_SUCCESS,
  LOGOUT,
} from "../types";

const url = api + "/user";

export const registerAction = (registerData) => {
  return async (dispatch) => {
    dispatch({ type: API_USER_START });
    try {
      const response = await Axios.post(`${url}/register`, registerData);
      const { id, username, email, token, roleID, verified } = response.data;
      localStorage.setItem("token", token);
      dispatch({
        type: API_USER_SUCCESS,
        payload: { id, username, email, roleID, verified },
      });
    } catch (err) {
      dispatch({ type: API_USER_FAILED, payload: err.response.data.error });
    }
  };
};

export const logoutAction = () => {
  return (dispatch) => {
    localStorage.removeItem("token");
    dispatch({
      type: LOGOUT,
    });
  };
};
