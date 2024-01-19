"use client";

import { createSlice} from "@reduxjs/toolkit";

const initialState = {
  badges: [],
  toggleBadge: {
    badge: true,
    certificate: false,
  },
  badgeIndex: 0,

};

export const badgesSlice = createSlice({
  name: "badges",
  initialState,
  reducers: {
    addBadges: (state, action) => {
      state.badges = action.payload;
    },
    toggleBadge: (state, action) => {
      state.toggleBadge = action.payload;
    },
    badgeIndex: (state, action) => {
      state.badgeIndex = action.payload;
    },
  
  },
});

// we are exporting the each methods, which are there in the reducers.
export const { addBadges, toggleBadge, badgeIndex } =
  badgesSlice.actions;

// we are exporting the whole reducer. Because store need to have this below reducers.
export default badgesSlice.reducer;
