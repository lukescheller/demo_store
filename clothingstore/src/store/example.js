import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

//multiple slices can/will exist
const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    // actions
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    // payload - extra data- parameter
    increase(state, action) {
      state.counter = state.counter + action.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  // reducer is a required word - configureStore wants 1 reducer
  reducer: {
    counter: counterSlice.reducer,
  },
});

//you're exporting the store/state & the actions to manipulate the store individually
//in another file the way you access these actions - import {counterActions} from '../store/example
export const counterActions = counterSlice.actions;
export default store;
