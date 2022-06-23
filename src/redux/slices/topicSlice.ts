/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { GetAllTopicSuccess } from '@redux/actions/topicAction';
import { createAction, createSlice } from '@reduxjs/toolkit';
import { TopicSlice } from '@type/topic';
import { HYDRATE } from 'next-redux-wrapper';
import { RootState } from '../reducer';
import { AppState } from '../store';

const initialState: TopicSlice = {};

const hydrate = createAction<AppState>(HYDRATE);

const sliceName = 'topicSlice';

const topicSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    getAllTopicStart: (state: TopicSlice) => {
      state.loadingTopics = true;
    },
    getAllTopicSuccess: (state: TopicSlice, { payload }: GetAllTopicSuccess) => {
      state.loadingTopics = false;
      state.topics = payload;
    },
    getAllTopicError: (state: TopicSlice) => {
      state.loadingTopics = false;
    },
  },
  extraReducers(builder) {
    builder.addCase(hydrate, (state, action) => {
      return {
        ...state,
        ...action.payload[sliceName],
      };
    });
  },
});

export const getTopicSlice = (state: RootState): TopicSlice => state[sliceName];

export const { getAllTopicStart, getAllTopicSuccess, getAllTopicError } = topicSlice.actions;

export default topicSlice.reducer;
