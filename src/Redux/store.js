"use client"
import { configureStore } from "@reduxjs/toolkit";
import adminTeamsReducer from "./adminTeamSlice";

const store = configureStore({
    reducer: {
        adminTeams: adminTeamsReducer
    }
})

export default store