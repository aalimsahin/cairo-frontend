import { createSlice, PayloadAction } from '@reduxjs/toolkit'


export interface NameState {
  value: string
}

const initialState : NameState = {
  value: "merhaba",
}


export const nameSlice = createSlice({
  name: 'name',
  initialState,
  reducers: {
    change: (state, action: PayloadAction<string>) => {

      state.value = action.payload;
    },

    reset: (state) => {
      state.value = "";
    }

  },
})


export const { change, reset} = nameSlice.actions

export default nameSlice.reducer

