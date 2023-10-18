import { createSlice } from '@reduxjs/toolkit'

export const ProductAmmountSlice = createSlice({
  name: 'Ammounter',
  initialState: {
    value: []
  },
  reducers: {
    increment: (state, action) => {
      const  { id }  = action.payload;
      const theId = state.value.find((item)=> item.id == id)
      if(!theId){        
        state.value.push({id:id, count:action.payload.count + 1, data: action.payload})
      }
      else{
        const me = state.value.find((item)=> item.id === id)
        if( me.count > 19){
          return
        } 
        me.count += 1
      }

    },
    decrement: (state, action) => {
      const  { id }  = action.payload;
      const theId = state.value.find((item)=> item.id === id)
      if(!theId){

        state.value.push({id:id, count:action.payload.count --, data: action.payload})
      }
      else{
        const me = state.value.find((item)=> item.id === id)
        if(me.count < 1){
          return
        }
        me.count -= 1
      }
            
    },

  }
})

export const { increment, decrement } = ProductAmmountSlice.actions

export default ProductAmmountSlice.reducer