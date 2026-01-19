import { configureStore } from "@reduxjs/toolkit";
import eventSlice from "./slices/ticketSlice";

export const reduxStore=configureStore(
    {
        reducer:{
            event:eventSlice,
        }
    }
)

