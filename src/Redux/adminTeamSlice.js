"use client"

import { createSlice } from "@reduxjs/toolkit"

const initialState = []

const adminTeamSlice = createSlice({
    name: "AdminTeams",
    initialState,
    reducers: {
        initializeAdminTeams(state, action) {
            return action.payload
        },
        add(state, action) {
            return [action.payload, ...state]
        }
    }
})

export const { add, initializeAdminTeams } = adminTeamSlice.actions;
export default adminTeamSlice.reducer;