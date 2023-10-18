import { createSlice } from "@reduxjs/toolkit"

export const isOpenSlice = createSlice({
    name: "isOpen",
    initialState: {
        value: false
    },
    reducers :{
        switching: (state) =>{
            state.value = !state.value
        }
    }

})

export const { switching } = isOpenSlice.actions
export default isOpenSlice.reducer