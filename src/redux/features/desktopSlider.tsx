
import { createSlice } from "@reduxjs/toolkit";

export const DesktopSlice = createSlice({
    name: "Desktops",
    initialState : {
        value: 1
    },
    reducers: {
        select: (state, action)=>{
            const data = action.payload
            state.value = data
        },
        increment: (state)=>{
            if(state.value > 3){
                state.value = 1
            }
            else{

                state.value += 1
            }
        },
        decrement: (state)=>{
            if(state.value < 2){
                state.value = 4
            }
            else{

                state.value -= 1
            }
        }

    }
})

export const { select, increment, decrement } =  DesktopSlice.actions

export default DesktopSlice.reducer