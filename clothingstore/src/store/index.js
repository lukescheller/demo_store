import { configureStore } from "@reduxjs/toolkit";

//how to merge all slice reducers together
// entriesReducer can be named anything...
import entriesReducer from "./signUpSlice";

//createStore needs a reducer - the reducer holds all of the state
//1 reducer - there can't be multiple
//the reducers will be merged into 1
const store = configureStore({
  // singular reducer..
  // reducer: counterSlice.reducer,
  // multiple reducers..
  // multiple reducers are merged into one big one
  reducer: {
    credentials: entriesReducer,
  },
});

// you export the store by itself
export default store;
