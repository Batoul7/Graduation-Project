import { createSlice } from "@reduxjs/toolkit";
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
  reducers: {},
});

export const booksReducer = booksSlice.reducer;
