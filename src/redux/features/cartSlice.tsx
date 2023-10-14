import { createSlice } from '@reduxjs/toolkit'
import { product } from '../../assets/util/data'

export const CartSlice = createSlice({
  name: 'Cart',
  initialState: {
    value: product
  },
  reducers: {
    addToCart: (state, action)  => {
        const newTodo = action.payload
        state.value.push(newTodo)
    },
    removeCart: (state, action) => {
        state.value = state.value.filter((item)=> item !== action.payload)
    },


  }
})

export const { addToCart, removeCart } = CartSlice.actions

export default CartSlice.reducer