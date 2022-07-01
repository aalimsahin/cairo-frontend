import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slicers/global'
import nameReducer from './slicers/name'
import starknetReducer from './slicers/starknet'
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    name: nameReducer,
    starknet: starknetReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;