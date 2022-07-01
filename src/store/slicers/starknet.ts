import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ThemeState {
  account: any,
  contract: any
}

const initialState: ThemeState ={
  account: null,
  contract:null,
}

export const starknetSlice = createSlice({
  name: "starknet",
  initialState,
  reducers: {
    setStarknetAccount: (state, action: PayloadAction<any>) => {
      state.account = action.payload;
    },
    setStarknetContract: (state, action: PayloadAction<any>) => {
      state.contract = action.payload;
    }
  }
})

export const {setStarknetAccount, setStarknetContract} = starknetSlice.actions;
export default starknetSlice.reducer;