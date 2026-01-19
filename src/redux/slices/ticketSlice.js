import { createSlice } from "@reduxjs/toolkit";

const eventSlice=createSlice(
{
    name:"events",
    initialState:{
        totalEvents:0,
        events:[
        ],
    },
    reducers:{
        setEvents:(state,action)=>{
            state.events=[...action.payload];
            state.totalEvents=action.payload.length;
        },
    
    }
}
)

export const {setEvents} = eventSlice.actions;

export default eventSlice.reducer;