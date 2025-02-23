import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { logUser, regUser } from "./userService";

// Check if user is present in local storage
const isUser = JSON.parse(localStorage.getItem("myUser"));

// Define initial state
const initialState = {
  user: isUser ? isUser : null,
  userLoading: false,
  userSuccess: false,
  userError: false,
  userMessage: "",
};

// Call the service function for user login
export const loginMyUser = createAsyncThunk(
  "auth/loginUser",
  async (data, thunkAPI) => {
    try {
      const user = await logUser(data); // Replace with your login service function
      localStorage.setItem("myUser", JSON.stringify(user)); // Store user in localStorage
      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Login failed"
      );
    }
  }
);

// Call the service function for user registration
export const registerMyUser = createAsyncThunk(
  "auth/registerUser",
  async (data, thunkAPI) => {
    try {
      const user = await regUser(data); // Replace with your registration service function
      localStorage.setItem("myUser", JSON.stringify(user)); // Store user in localStorage
      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Registration failed"
      );
    }
  }
);

// Create user slice
export const myUserSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userReset: (state) => {
      state.userLoading = false;
      state.userError = false;
      state.userSuccess = false;
      state.userMessage = "";
      state.user = null;
      localStorage.removeItem("myUser"); // Remove user from localStorage on logout
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(registerMyUser.pending, (state) => {
        state.userLoading = true;
      })
      .addCase(registerMyUser.rejected, (state, action) => {
        state.userLoading = false;
        state.userError = true;
        state.userMessage = action.payload;
      })
      .addCase(registerMyUser.fulfilled, (state, action) => {
        state.userLoading = false;
        state.userSuccess = true;
        state.user = action.payload;
      })
      .addCase(loginMyUser.pending, (state) => {
        state.userLoading = true;
      })
      .addCase(loginMyUser.rejected, (state, action) => {
        state.userLoading = false;
        state.userError = true;
        state.userMessage = action.payload;
      })
      .addCase(loginMyUser.fulfilled, (state, action) => {
        state.userLoading = false;
        state.userSuccess = true;
        state.user = action.payload;
      });
  },
});

export default myUserSlice.reducer;
export const { userReset } = myUserSlice.actions;
