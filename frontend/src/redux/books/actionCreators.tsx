import * as a from "./actionTypes";

interface Book {
  id: string;
  title: string;
  author: string;
  favorite: boolean;
}

interface AddBookAction {
  type: typeof a.ADD_BOOK;
  payload: Book;
}

interface DeleteBookAction {
  type: typeof a.DELETE_BOOK;
  payload: string;
}

interface ToggleFavoriteAction {
  type: typeof a.TOGGLE_FAVORITE;
  payload: string;
}

export type BookActionTypes =
  | AddBookAction
  | DeleteBookAction
  | ToggleFavoriteAction;

export const addBook = (newBook: Book) => {
  return {
    type: a.ADD_BOOK,
    payload: newBook,
  };
};

export const deleteBook = (id: string) => {
  return {
    type: a.DELETE_BOOK,
    payload: id,
  };
};

export const toggleFavorite = (id: string) => {
  return {
    type: a.TOGGLE_FAVORITE,
    payload: id,
  };
};
