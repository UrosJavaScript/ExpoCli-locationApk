import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authToken: null,
  authProvider: "",
  uid: "",
  fullName: "",
  email: "",
  displayName: null,
  phoneNumber: null,
  photoURL: null,
  providerId: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registrationUser: (state, action) => {
      state.authToken = action.payload.tokenUser;

      state.authProvider = action.payload.authProvider;
      state.fullName = action.payload.fullname;
      state.email = action.payload.email;
      state.uid = action.payload.uid;
      // state.photoURL = action.payload.photoURL;

      console.log("registrationUser: ", state);
    },

    loginUser: (state, action) => {
      state.authToken = action.payload.tokenUser;
      //console.log("loginUser slice: ", state.authToken);

      state.email = action.payload.email;
      state.fullName = action.payload.fullname;
      state.phoneNumber = action.payload.phoneNumber;
      state.photoURL = action.payload.photoURL;
      state.uid = action.payload.uid;
      state.providerId = action.payload.providerId;

      console.log("loginUser: ", state);
    },
    logoutUser: (state) => {
      state.authToken = null;
      state.fullName = "";
      state.email = "";
      state.uid = "";
      state.authProvider = "";
      state.providerId = "";
      state.password = "";
    },
  },
});

export const { registrationUser, loginUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
