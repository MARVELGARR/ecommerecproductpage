import { createSlice } from '@reduxjs/toolkit'


export interface newTodoProps{
  id: string;
  src: string;
  company: string;
  title: string;
  description: string;
  price: string;
  previousPrice: string;
  percentage: string;
}
export const CartSlice = createSlice({
  name: 'Cart',
  initialState: {
    value: []
  },
  reducers: {
    addToCart: (state, action)  => {
      const newTodo: newTodoProps = action.payload
      const obj = state.value.find((item)=> item.id === newTodo.id)
      if(obj){
        return
      }
      state.value.push(newTodo);
    },
    removeCart: (state, action) => {
      const {id}= action.payload;
      state.value = state.value.filter((item)=> item.id !== id);
    },


  }
})

// eslint-disable-next-line react-refresh/only-export-components
export const { addToCart, removeCart } = CartSlice.actions

export default CartSlice.reducer