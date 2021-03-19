import {
  API_PRODUCT_FAILED,
  API_PRODUCT_START,
  API_PRODUCT_SUCCESS,
  PRODUCT_BY_ID_SUCCESS,
} from "../types";

const INITIAL_STATE = {
  productList: [],
  productId: {},
  loading: false,
  error: false,
  errorMessage: "",
};

export const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case API_PRODUCT_START:
      return {
        ...state,
        loading: true,
      };
    case API_PRODUCT_SUCCESS:
      return {
        ...state,
        productList: action.payload,
        loading: false,
      };
    case API_PRODUCT_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload,
      };
    case PRODUCT_BY_ID_SUCCESS:
      return {
        ...state,
        productId: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
