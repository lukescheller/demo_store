import {
  createSlice,
  createSelector,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const axiosEntries = createAsyncThunk(
  "entries/axiosEntries",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/entries");
      // console.log(response);
      // response.json() was the problem
      return await response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const entriesSlice = createSlice({
  name: "entriesSlice",
  initialState: {
    entries: [],
    loading: "idle",
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(axiosEntries.pending, (state) => {
      state.entries = [];
      state.loading = "loading";
    });
    builder.addCase(axiosEntries.fulfilled, (state, { payload }) => {
      state.entries = payload;
      state.loading = "loaded";
    });
    builder.addCase(axiosEntries.rejected, (state, action) => {
      state.loading = "error";
      state.error = action.error.message;
    });
  },
});

export const selectEntries = createSelector(
  (state) => ({
    entries: state.entries,
    loading: state.entries.loading,
  }),
  (state) => state
);

export default entriesSlice.reducer;
