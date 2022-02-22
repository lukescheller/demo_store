// import { createSlice, configureStore } from "@reduxjs/toolkit";

// const initialState = { counter: 0, showCounter: true };

// //multiple slices can/will exist
// const counterSlice = createSlice({
//   name: "counter",
//   initialState: initialState,
//   reducers: {
//     // actions
//     increment(state) {
//       state.counter++;
//     },
//     decrement(state) {
//       state.counter--;
//     },
//     // payload - extra data- parameter
//     increase(state, action) {
//       state.counter = state.counter + action.amount;
//     },
//     toggleCounter(state) {
//       state.showCounter = !state.showCounter;
//     },
//   },
// });

// const store = configureStore({
//   // reducer is a required word - configureStore wants 1 reducer
//   reducer: {
//     counter: counterSlice.reducer,
//   },
// });

// //you're exporting the store/state & the actions to manipulate the store individually
// //in another file the way you access these actions - import {counterActions} from '../store/example
// export const counterActions = counterSlice.actions;
// export default store;

//WAS IN INDEX JS

// import { configureStore } from "@reduxjs/toolkit";

// //how to merge all slice reducers together
// // entriesReducer can be named anything...
// import entriesReducer from "./signUpSlice";

// //createStore needs a reducer - the reducer holds all of the state
// //1 reducer - there can't be multiple
// //the reducers will be merged into 1
// const store = configureStore({
//   // singular reducer..
//   // reducer: counterSlice.reducer,
//   // multiple reducers..
//   // multiple reducers are merged into one big one
//   reducer: {
//     credentials: entriesReducer,
//   },
// });

// // you export the store by itself
// export default store;
