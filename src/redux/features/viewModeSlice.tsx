import { createSlice } from "@reduxjs/toolkit";


export const ViewMode = createSlice({
    name: "view",
    initialState: {
        value: false,
    },
    reducers:{
        viewing: (state)=>{
            state.value = true;
        },
        notViewing: (state)=>{
            state.value = false;
        }
    }
})

export const { viewing, notViewing } = ViewMode.actions

export default ViewMode.reducer