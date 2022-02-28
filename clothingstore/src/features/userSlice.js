import {
  createSlice,
  createSelector,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const axiosProfile = createAsyncThunk(
  "axioxProfile",
  async (_, thunkAPI) => {
    // it's getting the previous token before it resets...
    const token = localStorage.getItem("token").replace(/['"]+/g, "");
    const config = {
      headers: {
        "x-auth-token": token,
      },
    };
    const res = await axios.get("/profile", config);
    return await res.data;
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    user: null,
    loading: "idle",
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(axiosProfile.pending, (state) => {
      state.loading = "loading";
      state.error = "";
    });
    builder.addCase(axiosProfile.fulfilled, (state, { payload }) => {
      state.user = payload;
      state.loading = "loaded";
      state.error = "";
    });
    builder.addCase(axiosProfile.rejected, (state, action) => {
      state.token = null;
      state.loading = "error";
      state.error = action.error;
    });
  },
});

export default profileSlice.reducer;
