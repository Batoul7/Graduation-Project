import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Book, books as initialBooks } from "../../Data/books";

interface BooksState {
  books: Book[];
}

const initialBooksState: BooksState = {
  books: initialBooks,
};

const booksSlice = createSlice({
  name: "books",
  initialState: initialBooksState,
  reducers: {
    addBook: (state, action: PayloadAction<Book>) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action: PayloadAction<number>) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
    updateBook: (state, action: PayloadAction<Book>) => {
      const index = state.books.findIndex((book) => book.id === action.payload.id);
      if (index !== -1) {
        state.books[index] = action.payload;
      }
    },
  },
});

export const { addBook, removeBook, updateBook } = booksSlice.actions;
export const booksReducer = booksSlice.reducer;
