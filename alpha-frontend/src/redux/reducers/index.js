import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { productReducer } from "./productReducer";
import { cartReducer } from "./cartReducer";
import { parcelReducer } from "./parcelReducer";

export default combineReducers({
  user: userReducer,
  product: productReducer,
  cart: cartReducer,
  parcel: parcelReducer,
});
