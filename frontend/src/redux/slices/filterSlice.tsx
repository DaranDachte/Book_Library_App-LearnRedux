import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  author: "",
  onlyFavorite: false,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      state.title = action.payload; // immer библиотека помогает мутировать стейт
      // можно возвращать стейт как обычно
      // return {...state, title:action.payload}
    },
    setAuthorFilter: (state, action) => {
      state.author = action.payload;
    },
    setOnlyFavoriteFilter: (state) => {
      state.onlyFavorite = !state.onlyFavorite;
    },

    resetFilters: () => {
      return initialState;
    },
  },
});

export const {
  setTitleFilter,
  setAuthorFilter,
  setOnlyFavoriteFilter,
  resetFilters,
} = filterSlice.actions;
export const selectTitleFilter = (state) => state.filter.title;
export const selectAuthorFilter = (state) => state.filter.author;
export const selectOnlyFavoriteFilter = (state) => state.filter.onlyFavorite;

//один селектор для всего
// export const selectFilters =(state)=> state.filters
// но изменения в одном компоненте приводят к ререндеренгу во всех компонентах.

export default filterSlice.reducer;
