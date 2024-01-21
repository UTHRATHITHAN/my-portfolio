
// Step - 1
import { configureStore } from '@reduxjs/toolkit';
import skillsReducer from '../features/skills/skillsSlice';
import badgesReducer from '../features/badges/badgesSlice'
import projectsReducer from '../features/projects/projectsSlice';


// Step - 2
export const store = configureStore({
    reducer:{
        skill : skillsReducer,
        badge : badgesReducer,
        project : projectsReducer
    }
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch