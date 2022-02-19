import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { userID: null, shoppingCart: [], isLoggedIn: false };

//multiple slices can/will exist
const shoppingSlice = createSlice({
  name: "shopping",
  initialState,
  reducers: {},
});

const store = configureStore({
  // reducer is a required word - configureStore wants 1 reducer
  reducer: {
    // counter: counterSlice.reducer,
    shop: shoppingSlice.reducer,
  },
});

//you're exporting the store/state & the actions to manipulate the store individually
//in another file the way you access these actions - import {counterActions} from '../store/example
export const shoppingActions = shoppingSlice.actions;
export default store;
