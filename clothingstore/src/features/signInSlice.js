import {
  createSlice,
  createSelector,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const axiosSignIn = createAsyncThunk(
  "axiosSignIn",
  async (obj, _, thunkAPI) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    //axios doesn't need a try catch because it does that automatically
    //axios will also jsonify you're result
    const response = await axios.post("/signin", obj, config);
    localStorage.setItem("token", JSON.stringify(response.data.token));
    let token = localStorage.getItem("token").replace(/['"]+/g, "");
    const config2 = {
      headers: {
        "x-auth-token": token,
      },
    };
    const user = await axios.get("/profile", config2);
    // console.log(response);
    // response.json() was the problem
    return await user.data;
  }
);

const signInSlice = createSlice({
  name: "signInSlice",
  initialState: {
    token: null,
    loading: "idle",
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(axiosSignIn.pending, (state) => {
      state.loading = "loading";
      state.error = "";
    });
    builder.addCase(axiosSignIn.fulfilled, (state, { payload }) => {
      state.token = payload;
      state.loading = "loaded";
      state.error = "";
    });
    builder.addCase(axiosSignIn.rejected, (state, action) => {
      state.token = null;
      state.loading = "error";
      state.error = action;
    });
  },
});

export default signInSlice.reducer;
