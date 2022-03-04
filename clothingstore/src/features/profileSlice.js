import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//SIGN UP
export const load_Profile = createAsyncThunk("load_Profile", async () => {
  //axios doesn't need a try catch because it does that automatically
  //axios will also jsonify you're result
  let profile_token = localStorage.getItem("token").replace(/['"]+/g, "");
  const profile_config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": profile_token,
    },
  };
  const user = await axios.get("/profile", profile_config);
  // console.log(response);
  // response.json() was the problem
  return await user.data;
});

const loadSlice = createSlice({
  name: "loadSlice",
  initialState: {
    user: null,
    loading: "idle",
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    //SIGN UP **
    builder.addCase(load_Profile.pending, (state) => {
      state.loading = "loading";
      state.error = "";
    });
    builder.addCase(load_Profile.fulfilled, (state, { payload }) => {
      state.user = payload;
      state.loading = "loaded";
      state.error = "";
    });
    builder.addCase(load_Profile.rejected, (state, action) => {
      state.loading = "error";
      state.error = action.error.message;
    });
  },
});

export default loadSlice.reducer;
