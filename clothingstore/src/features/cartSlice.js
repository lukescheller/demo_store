import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const axiosCheckout = createAsyncThunk(
  "axiosCheckout",
  async (JSON_ARRAY) => {
    let token = localStorage.getItem("token").replace(/['"]+/g, "");
    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
    };
    const response = await axios.put("/checkout", JSON_ARRAY, config);
    console.log("works");
    return await response.data;
  }
);

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cart: [],
    total: 0,
    loading: "idle",
    error: "",
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
  extraReducers: (builder) => {
    builder.addCase(axiosCheckout.pending, (state) => {
      state.loading = "loading";
      state.error = "";
    });
    builder.addCase(axiosCheckout.fulfilled, (state, { payload }) => {
      state.cart = [];
      state.total = 0;
      state.loading = "loaded";
      state.error = "";
    });
    builder.addCase(axiosCheckout.rejected, (state, action) => {
      state.loading = "error";
      state.error = action.error;
    });
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
