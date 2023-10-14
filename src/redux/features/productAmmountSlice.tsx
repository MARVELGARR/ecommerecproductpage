import { createSlice } from '@reduxjs/toolkit'

export const ProductAmmountSlice = createSlice({
  name: 'Ammounter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
        if( state.value > 19){
            return
        }
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: state => {
        if(state.value < 1){
            return
        }
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

export const { increment, decrement, incrementByAmount } = ProductAmmountSlice.actions

export default ProductAmmountSlice.reducer