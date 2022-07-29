import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadComments = createAsyncThunk(
  "comments/loadComments",
  async (permalink) => {
    const response = await fetch(`https://www.reddit.com${permalink}.json`);
    const json = await response.json();
    return json[1].data.children.map((subreddit) => subreddit.data);
  }
);

export const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    commentsArray: [],
    isLoading: false,
    hasError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadComments.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(loadComments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.commentsArray = action.payload;
      })
      .addCase(loadComments.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export const selectComments = (state) => state.comments.commentsArray;
export const selectIsLoading = (state) => state.comments.isLoading;
export const selectHasError = (state) => state.comments.hasError;

export default commentsSlice.reducer;
