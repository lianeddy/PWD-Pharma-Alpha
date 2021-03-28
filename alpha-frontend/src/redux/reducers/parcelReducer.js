import {
  API_PARCEL_START,
  API_PARCEL_SUCCESS,
  API_PARCEL_FAILED,
  PARCEL_BY_ID_SUCCES,
} from "../types";

const INITIAL_STATE = {
  parcelList: [],
  parcelbyId: [],
  loading: false,
  error: false,
  errorMessage: "",
};

export const parcelReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case API_PARCEL_START:
      return {
        ...state,
        loading: true,
      };
    case API_PARCEL_SUCCESS:
      return {
        ...state,
        parcelList: action.payload,
        loading: false,
      };
    case PARCEL_BY_ID_SUCCES:
      return {
        ...state,
        parcelbyId: action.payload,
      };
    case API_PARCEL_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
