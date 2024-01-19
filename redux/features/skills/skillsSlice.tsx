"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  skills: [],
  toggleSkills: "frontend",
  btnActive: {
    frontend: true,
    backend: false,
    database: false,
    devops: false,
  },
};

export const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    addSkills: (state, action) => {
      state.skills = action.payload;
    },
    toggleSkills: (state, action) => {
      state.toggleSkills = action.payload;
    },

    changeBtnActive: (state, action) => {
      state.btnActive = action.payload;
    },
  },
});

// we are exporting the each methods, which are there in the reducers.
export const { addSkills, toggleSkills, changeBtnActive } = skillsSlice.actions;

// we are exporting the whole reducer. Because store need to have this below reducers.
export default skillsSlice.reducer;
