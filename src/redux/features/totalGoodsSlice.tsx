import { createSlice } from "@reduxjs/toolkit"

export const TotalGoodsSlice = createSlice({
    name: "totalCart",
    initialState: {
        value: 0
    },
    reducers :{
        update : (state, action) =>{
            state
        }
    }

})

export const { update } = TotalGoodsSlice.actions
export default TotalGoodsSlice.reducer