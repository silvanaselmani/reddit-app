//https://www.reddit.com/search.json?q=cake%20recipes
import { createSlice } from "@reduxjs/toolkit";

export const searchBarSlice = createSlice({
  name: "search",
  initialState: {
    searchTerm: "",
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    clearSearchTerm: (state) => {
      state.searchTerm = "";
    },
  },
});

export const selectSearchTerm = (state) => state.search.searchTerm;

export const { setSearchTerm, clearSearchTerm } = searchBarSlice.actions;

export default searchBarSlice.reducer;
