import { createSlice } from "@reduxjs/toolkit";

export interface ViewModeState{

    value: boolean;
}



export const ViewMode = createSlice({
    name: "view",
    initialState: {
        value: false,
    } as ViewModeState,

    reducers:{
        viewing: (state)=>{
            state.value = true;
        },
        notViewing: (state)=>{
            state.value = false;
        }
    }
})

// eslint-disable-next-line react-refresh/only-export-components
export const { viewing, notViewing } = ViewMode.actions

export default ViewMode.reducer