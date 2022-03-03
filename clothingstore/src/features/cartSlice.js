import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cart: [],
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
      let rmv = action.payload.price.replace("$", "");
      let num = Number(rmv);
      state.total += num;
    },
    removeFromCart: (state, action) => {
      for (let x = 0; x < state.cart.length; x++) {
        if (state.cart[x].id === action.payload) {
          // This has to be before getting rid of the item in the state
          let rmv = state.cart[x].price.replace("$", "");
          let num = Number(rmv);
          state.total -= num;
          state.cart.splice(x, 1);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
