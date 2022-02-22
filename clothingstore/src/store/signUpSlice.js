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

const entriesSlice = createSlice({
  name: "entriesSlice",
  initialState: {
    is_loggedIn: false,
    id: null,
    error: false,
    error_message: "",
    loading: "",
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
      state.error = false;
      state.error_message = "";
      state.id = payload.token;
      state.loading = "loaded";
    });
    builder.addCase(axiosRegister.rejected, (state, action) => {
      state.is_loggedIn = false;
      state.id = null;
      state.error = true;
      state.loading = "error";
      state.error_message = "Email already exists within DB";
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
