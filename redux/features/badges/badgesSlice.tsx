"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ToggleBadge = {
  badge: boolean;
  certificate: boolean;
};

type Badges = {
  name: string;
  data: string;
  imgURL: string;
};
export interface badge {
  badges: Badges[];
  toggleBadge: ToggleBadge;
  badgeIndex: number;
}

const initialState: badge = {
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
    addBadges: (state, action: PayloadAction<Badges[]>) => {
      state.badges = action.payload;
    },
    toggleBadge: (state, action: PayloadAction<ToggleBadge>) => {
      state.toggleBadge = action.payload;
    },
    badgeIndex: (state, action: PayloadAction<number>) => {
      state.badgeIndex = action.payload;
    },
  },
});

// we are exporting the each methods, which are there in the reducers.
export const { addBadges, toggleBadge, badgeIndex } = badgesSlice.actions;

// we are exporting the whole reducer. Because store need to have this below reducers.
export default badgesSlice.reducer;
