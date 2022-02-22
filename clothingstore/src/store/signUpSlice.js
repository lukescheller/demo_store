import {
  createSlice,
  createSelector,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

//REGISTER
export const axiosRegister = createAsyncThunk(
  "axiosRegister",
  async (obj, _, thunkAPI) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post("/register", obj, config);
      // console.log(response);
      // response.json() was the problem
      localStorage.setItem("token", JSON.stringify(res.data.token));
      return await res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

//SIGN IN
export const axiosSignIn = createAsyncThunk(
  "axiosSignIn",
  async (obj, _, thunkAPI) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post("/signin", obj, config);
      localStorage.setItem("token", JSON.stringify(res.data.token));
      return await res.data;
      // console.log(res.data);
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

// GET USER INFO
export const axiosProfile = createAsyncThunk(
  "axiosProfile",
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem("token").replace(/['"]+/g, "");
      const config = {
        headers: {
          "x-auth-token": token,
        },
      };
      const res = await axios.get("/profile", config);
      return await res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const entriesSlice = createSlice({
  name: "entriesSlice",
  initialState: {
    is_loggedIn: false,
    id: null,
    signIn_error: false,
    signIn_error_message: "",
    signUp_error: false,
    signUp_error_message: "",
    loading: "",
    error: "",
    cart: [],
    total: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    //REGISTER
    builder.addCase(axiosRegister.pending, (state) => {
      state.loading = "loading";
    });
    builder.addCase(axiosRegister.fulfilled, (state, { payload }) => {
      state.is_loggedIn = true;
      state.signUp_error = false;
      state.signUp_error_message = "";
      state.signIn_error = false;
      state.signIn_error_message = "";
      state.id = payload.token;
      state.loading = "loaded";
    });
    builder.addCase(axiosRegister.rejected, (state, action) => {
      state.is_loggedIn = false;
      state.id = null;
      state.signUp_error = true;
      state.loading = "error";
      state.signUp_error_message =
        "Email already exists within DB or invalid credentials";
    });
    //SIGNIN
    builder.addCase(axiosSignIn.pending, (state) => {
      state.loading = "loading";
    });
    builder.addCase(axiosSignIn.fulfilled, (state, { payload }) => {
      state.is_loggedIn = true;
      state.signIn_error = false;
      state.signIn_error_message = "";
      state.signUp_error = false;
      state.signUp_error_message = "";
      state.id = payload.token;
      state.loading = "loaded";
    });
    builder.addCase(axiosSignIn.rejected, (state, action) => {
      state.is_loggedIn = false;
      state.id = null;
      state.signIn_error = true;
      state.loading = "error";
      state.signIn_error_message = "Email doesn't exist or false password";
    });
    // PROFILE
    builder.addCase(axiosProfile.pending, (state) => {
      state.loading = "loading";
    });
    builder.addCase(axiosProfile.fulfilled, (state, { payload }) => {
      state.is_loggedIn = true;
      state.signIn_error = false;
      state.signIn_error_message = "";
      state.id = payload;
      state.loading = "loaded";
    });
    builder.addCase(axiosProfile.rejected, (state, action) => {
      state.loading = "error";
      state.error = action.error.message;
    });
  },
});

export const selectCredentials = createSelector(
  (state) => ({
    // credentials is in index.js
    // don't quite understand why this is named what it's named
    credentials: state.credentials,
    loading: state.credentials.loading,
  }),
  (state) => state
);

export default entriesSlice.reducer;
