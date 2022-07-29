import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadSubReddits = createAsyncThunk(
  "subReddits/loadSubReddits",
  async () => {
    const response = await fetch(`https://www.reddit.com/subreddits.json`);
    const json = await response.json();
    return json.data.children.map((subreddit) => subreddit.data);
  }
);

export const subRedditsSlice = createSlice({
  name: "subReddits",
  initialState: {
    subRedditsArray: [],
    isLoading: false,
    hasError: false,
  },
  reducers: {
    addSubReddits: (state) => {
      state.subRedditsArray.push("Hola");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadSubReddits.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(loadSubReddits.fulfilled, (state, action) => {
        state.isLoading = false;
        state.subRedditsArray = action.payload;
      })
      .addCase(loadSubReddits.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export const selectSubReddits = (state) => state.subReddits.subRedditsArray;
export const selectIsLoading = (state) => state.subReddits.isLoading;
export const selectHasError = (state) => state.subReddits.hasError;

export const { addSubReddits } = subRedditsSlice.actions;

export default subRedditsSlice.reducer;
