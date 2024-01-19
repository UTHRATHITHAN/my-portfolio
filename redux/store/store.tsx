"use client";
// Step - 1
import { configureStore } from '@reduxjs/toolkit';
import skillsReducer from '../features/skills/skillsSlice';
import badgesReducer from '../features/badges/badgesSlice'
import projectsReducer from '../features/projects/projectsSlice';


// Step - 2
export const store = configureStore({
    reducer:{
        skillsReducer,
        badgesReducer,
        projectsReducer
    }
})