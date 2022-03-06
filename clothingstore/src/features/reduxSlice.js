import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//RELOAD CART
export const axiosReload = createAsyncThunk("axiosReload", async () => {
  let auth_token = localStorage.getItem("token").replace(/['"]+/g, "");
  const reload_config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": auth_token,
    },
  };
  const user = await axios.get("/profile", reload_config);
  // console.log(response);
  // response.json() was the problem
  return await user.data;
});

//SIGN IN
export const axiosSignIn = createAsyncThunk("axiosSignIn", async (obj) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  //axios doesn't need a try catch because it does that automatically
  //axios will also jsonify you're result
  const response = await axios.post("/signin", obj, config);
  localStorage.setItem("token", JSON.stringify(response.data.token));
  let auth_token = localStorage.getItem("token").replace(/['"]+/g, "");
  const auth_config = {
    headers: {
      "x-auth-token": auth_token,
    },
  };
  const user = await axios.get("/profile", auth_config);
  // console.log(response);
  // response.json() was the problem
  return await user.data;
});

//SIGN UP
export const axiosSignUp = createAsyncThunk("axiosSignUp", async (obj) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  //axios doesn't need a try catch because it does that automatically
  //axios will also jsonify you're result
  const response = await axios.post("/register", obj, config);
  localStorage.setItem("token", JSON.stringify(response.data.token));
  let auth_token = localStorage.getItem("token").replace(/['"]+/g, "");
  const auth_config = {
    headers: {
      "x-auth-token": auth_token,
    },
  };
  const user = await axios.get("/profile", auth_config);
  // console.log(response);
  // response.json() was the problem
  return await user.data;
});

const reduxSlice = createSlice({
  name: "reduxSlice",
  initialState: {
    // SIGN IN
    isAuthorized: false,
    user: null,
    signIn_loading: "idle",
    signIn_error: "",
    // SIGN UP
    signUp_loading: "idle",
    signUp_error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    //SIGN UP **
    builder.addCase(axiosSignUp.pending, (state) => {
      state.signUp_loading = "loading";
      state.signUp_error = "";
    });
    builder.addCase(axiosSignUp.fulfilled, (state, { payload }) => {
      state.isAuthorized = true;
      state.user = payload;
      state.signUp_loading = "loaded";
      state.signUp_error = "";
      //SIGN IN
      state.signIn_loading = "idle";
      state.signIn_error = "";
    });
    builder.addCase(axiosSignUp.rejected, (state, action) => {
      state.isAuthorized = false;
      state.user = null;
      state.signUp_loading = "error";
      state.signUp_error = action.error.message;
      //SIGN IN
      state.signIn_loading = "idle";
      state.signIn_error = "";
    });
    //SIGN IN **
    builder.addCase(axiosSignIn.pending, (state) => {
      state.signIn_loading = "loading";
      state.signIn_error = "";
    });
    builder.addCase(axiosSignIn.fulfilled, (state, { payload }) => {
      state.isAuthorized = true;
      state.user = payload;
      state.signIn_loading = "loaded";
      state.signIn_error = "";
      //SIGN UP
      state.signUp_loading = "idle";
      state.signUp_error = "";
    });
    builder.addCase(axiosSignIn.rejected, (state, action) => {
      state.isAuthorized = false;
      state.user = null;
      state.signIn_loading = "error";
      state.signIn_error = action.error.message;
      //SIGN UP
      state.signUp_loading = "idle";
      state.signUp_error = "";
    });
    //RELOAD **
    builder.addCase(axiosReload.pending, (state) => {});
    builder.addCase(axiosReload.fulfilled, (state, { payload }) => {
      state.user = payload;
    });
    builder.addCase(axiosReload.rejected, (state, action) => {});
  },
});

export default reduxSlice.reducer;
