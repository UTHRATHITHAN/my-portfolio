"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projectsList : [],
  filteredProject : [],
};

export const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers :{
      addProjectList : (state, action) => {
        state.projectsList = action.payload
      },
      addFilteredProject : (state, action) => {
        state.filteredProject = action.payload
      }
    }
})

export const  { addProjectList, addFilteredProject } = projectsSlice.actions;

export default projectsSlice.reducer