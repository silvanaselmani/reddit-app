import { configureStore } from "@reduxjs/toolkit";
import subRedditsReducer from "../features/SubReddits/SubRedditsSlice";
import postsReducer from "../features/Posts/PostsSlice";

export const store = configureStore({
  reducer: {
    subReddits: subRedditsReducer,
    posts: postsReducer,
  },
});
