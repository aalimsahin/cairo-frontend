import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ThemeState {
  value: any;
}

const initialState: ThemeState ={
  value: null,
}

export const starknetSlice = createSlice({
  name: "starknet",
  initialState,
  reducers: {
    setStarknet: (state, action: PayloadAction<any>) => {
      state.value = action.payload;
    }
  }
})

export const {setStarknet} = starknetSlice.actions;
export default starknetSlice.reducer;