import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface BalanceState {
  value: number;
  input: string;
}

const initialState: BalanceState = {
  value: 0,
  input: "",
};

export const balanceSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {
    change: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },

    getInput: (state, action: PayloadAction<string>) => {
      state.input = action.payload;
    },
  },
});

export const { change, getInput } = balanceSlice.actions;

export default balanceSlice.reducer;
