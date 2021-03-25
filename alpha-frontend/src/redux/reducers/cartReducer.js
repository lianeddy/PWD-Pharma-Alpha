import { ADD_TO_CART, ADD_TO_CART_SUCCESS } from "../types";

const INITIAL_STATE = {
  cartList: [],
  loading: false,
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        loading: true,
      };
    case ADD_TO_CART_SUCCESS:
      return {
        ...state,
        cartList: [...state.cartList, action.payload],
      };
    default:
      return state;
  }
};

const cart = {
  parcels: [
    {
      parcelID: 1,
      parcelName: "PAKET A",
      products: [
        {
          productID: 2,
          productName: "Sabun",
          price: 2000,
          categoryID: 1,
          image: "/shop",
          qty: 1,
        },
        {
          productID: 2,
          productName: "Sabun",
          price: 2000,
          categoryID: 1,
          image: "/shop",
          qty: 1,
        },
      ],
    },
  ],
};
//   products: [
//     {
//       productID: 1,
//       productName: "Sabun",
//       price: 2000,
//       categoryID: 1,
//       image: "/shop",
//       qty: 1,
//     },
//   ],
// };
