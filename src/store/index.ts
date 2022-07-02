import { configureStore } from "@reduxjs/toolkit";
import starknetReducer from "./slicers/starknet";
import balanceReducer from "./slicers/balance";

export const store = configureStore({
  reducer: {
    starknet: starknetReducer,
    balance: balanceReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
