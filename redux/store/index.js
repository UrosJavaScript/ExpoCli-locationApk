import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";

// import { configureStore } from "@reduxjs/toolkit";
import auth from "./authSlice";
// import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: "authToken",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, auth);

// export const store = configureStore({
//   reducer: {
//     auth,
//   },
// });

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
