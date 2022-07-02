import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ThemeState {
  account: any;
  contract: any;
  provider: any;
}

const initialState: ThemeState = {
  account: null,
  contract: null,
  provider: null,
};

export const starknetSlice = createSlice({
  name: "starknet",
  initialState,
  reducers: {
    setStarknetAccount: (state, action: PayloadAction<any>) => {
      state.account = action.payload;
    },
    setStarknetContract: (state, action: PayloadAction<any>) => {
      state.contract = action.payload;
    },
    setStarknetProvider: (state, action: PayloadAction<any>) => {
      state.provider = action.payload;
    },
  },
});

export const { setStarknetAccount, setStarknetContract, setStarknetProvider } =
  starknetSlice.actions;
export default starknetSlice.reducer;
