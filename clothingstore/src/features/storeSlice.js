import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//SIGN IN
export const axiosItems = createAsyncThunk("axiosItems", async () => {
  const items = await axios.get("/itinerary");
  // console.log(response);
  // response.json() was the problem
  return await items.data;
});

const storeSlice = createSlice({
  name: "storeSlice",
  initialState: {
    // SIGN IN
    items: null,
    loading: "idle",
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    //SIGN UP
    builder.addCase(axiosItems.pending, (state) => {
      state.loading = "loading";
      state.error = "";
    });
    builder.addCase(axiosItems.fulfilled, (state, { payload }) => {
      state.items = payload;
      state.loading = "loaded";
      state.error = "";
    });
    builder.addCase(axiosItems.rejected, (state, action) => {
      state.loading = "error";
      state.error = action.error.message;
    });
  },
});

export default storeSlice.reducer;
