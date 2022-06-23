import { combineReducers } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import layoutSlice from './slices/layoutSlice';
import topicSlice from './slices/topicSlice';

export const whitelist = [];

export const rootReducer = combineReducers({
  userSlice,
  layoutSlice,
  topicSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export type PayloadName = 'payload';
