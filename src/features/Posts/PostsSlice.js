import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadPosts = createAsyncThunk(
  "posts/loadPosts",
  async (arg = "popular") => {
    let endpoint = "";
    if (arg === "new" || arg === "top" || arg === "rising") {
      endpoint = `https://www.reddit.com/r/popular/${arg}.json`;
    } else if (arg.includes("=")) {
      endpoint = `https://www.reddit.com//search.json?q${arg}`;
    } else {
      endpoint = `https://www.reddit.com/r/${arg}.json`;
    }
    const response = await fetch(endpoint);
    const json = await response.json();
    return json.data.children.map((post) => post.data);
  }
);

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    isLoading: false,
    hasError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadPosts.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
        //console.log("pending");
      })
      .addCase(loadPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
        //console.log("fulfilled");
      })
      .addCase(loadPosts.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
        //console.log("rejected");
      });
  },
});

export const selectPosts = (state) => state.posts.posts;
export const selectIsLoading = (state) => state.posts.isLoading;
export const selectHasError = (state) => state.posts.hasError;

export default postsSlice.reducer;
