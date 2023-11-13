import * as a from "./actionTypes";
import Book from "../store";
import { BookActionTypes } from "./actionCreators";

interface Book {
  id: string;
  title: string;
  author: string;
  isFavorite: boolean;
}
const initialState: Book[] = [];

const booksReducer = (state = initialState, action: BookActionTypes) => {
  switch (action.type) {
    case a.ADD_BOOK:
      return [...state, action.payload];
    case a.DELETE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    case a.TOGGLE_FAVORITE:
      return state.map((book) =>
        book.id === action.payload
          ? { ...book, isFavorite: !book.isFavorite }
          : book
      );

    default:
      return state;
  }
};

export default booksReducer;
