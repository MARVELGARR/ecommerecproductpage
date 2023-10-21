import { createSlice } from '@reduxjs/toolkit'

interface countState{
  value: number
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  } as countState,
  reducers: {
    increment: state => {
      if(state.value > 2){
        state.value = 0
      }
      else{

        state.value += 1
      }
    },
    decrement: state => {
      if(state.value < 1){
        state.value = 3
      }
      else{

        state.value -= 1
      }
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer