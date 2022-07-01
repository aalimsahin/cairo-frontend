import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
}


const initialState: CounterState = {
  value: 1,
}



export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {

      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload
    },
    change: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    },
  },
})


export const {change, increment, decrement, incrementByAmount, decrementByAmount } = counterSlice.actions

export default counterSlice.reducer

