import { createSlice } from "@reduxjs/toolkit"

const intitalState = {
    teamData: localStorage.getItem("teamData")
    ? JSON.parse(localStorage.getItem("teamData"))
    : null,
}

export const homeSlice = createSlice({
    name:"home",
    initialState: intitalState,
    reducers:{
        home(state ,value){
            state.teamData = value.payload;
            localStorage.setItem("teamData", JSON.stringify(state.teamData))
        }
    }
})

export const {home} = homeSlice.actions;
export default homeSlice.reducer;