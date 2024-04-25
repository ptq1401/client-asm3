import { createSlice, configureStore } from "@reduxjs/toolkit";
//-------------------createSlice------------------------
let loginInitialState = { login: false, currentUser: "" };

//----popup----
const popupSlice = createSlice({
  name: "popup",
  initialState: { display: false, data: {} },
  reducers: {
    SHOW_POPUP(state, actions) {
      state.display = true;
      state.data = actions.payload;
    },
    HIDE_POPUP(state) {
      state.display = false;
      state.data = {};
    },
  },
});
//----Login-Logout---
const loginSlice = createSlice({
  name: "login",
  initialState: loginInitialState,
  reducers: {
    ON_LOGIN(state, actions) {
      state.login = true;
      state.currentUser = actions.payload;
    },
    ON_LOGOUT(state) {
      state.login = false;
      state.currentUser = "";
    },
  },
});

//-------LiveChat------
const chatSlice = createSlice({
  name: "chat",
  initialState: { show: false },
  reducers: {
    CLICK(state) {
      state.show = !state.show;
    },
  },
});
//-------------------------------------------
const store = configureStore({
  reducer: {
    popup: popupSlice.reducer,
    login: loginSlice.reducer,
    chat: chatSlice.reducer,
  },
});
//---------------export----------------------------
export default store;
export const popupAction = popupSlice.actions;
export const loginAction = loginSlice.actions;
export const chatAction = chatSlice.actions;
