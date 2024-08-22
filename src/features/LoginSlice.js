import { createSlice } from "@reduxjs/toolkit";

const LoginSlice = createSlice({
  name: 'login',
  initialState: {
    olxusers: [],  
    currentUser: null,
  },
  reducers: {
    signup: (state, action) => {
      const { FirstName } = action.payload;

      if (!Array.isArray(state.olxusers)) {
        state.olxusers = [];
      }

      const userExists = state.olxusers.some(user => user.FirstName === FirstName);

      if (!userExists) {
        state.olxusers.push(action.payload);  
      } else {
        alert('User already exists. Please log in.');
      }
    },
    loginuser: (state, action) => {
      const { FirstName, Password } = action.payload;
      const user = state.olxusers.find(
        user => user.FirstName === FirstName && user.Password === Password
      );

      if (user) {
        state.currentUser = user;
      } else {
        alert('Invalid credentials. Please try again.');
      }
    },
    logout: (state) => {
      state.currentUser = null;
      
    },
  },
});

export const { signup, loginuser, logout } = LoginSlice.actions;
export default LoginSlice.reducer;
