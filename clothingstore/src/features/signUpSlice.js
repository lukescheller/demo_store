import {
  createSlice,
  createSelector,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const axiosSignUp = createAsyncThunk(
  "axiosSignUp",
  async (obj, _, thunkAPI) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axios.post("/register", obj, config);
      // console.log(response);
      // response.json() was the problem
      localStorage.setItem("token", JSON.stringify(response.data.token));
      return await response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const signUpSlice = createSlice({
  name: "signUpSlice",
  initialState: {
    token: null,
    loading: "idle",
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(axiosSignUp.pending, (state) => {
      state.loading = "loading";
      state.error = "";
    });
    builder.addCase(axiosSignUp.fulfilled, (state, { payload }) => {
      state.token = payload.token;
      state.loading = "loaded";
      state.error = "";
    });
    builder.addCase(axiosSignUp.rejected, (state, action) => {
      state.token = null;
      state.loading = "error";
      state.error = action.error;
    });
  },
});

export default signUpSlice.reducer;
