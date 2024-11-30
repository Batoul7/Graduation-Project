import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { books, Book } from "../../Data/books";

interface BooksState {
  books: Book[];
}

const initialBooksState: BooksState = {
  books, 
};

const booksSlice = createSlice({
  name: "books",
  initialState: initialBooksState,
  reducers: {
    // setCurrentPage: (state, action: PayloadAction<string>) => {

    // },
  },
});

export const booksReducer = booksSlice.reducer;
