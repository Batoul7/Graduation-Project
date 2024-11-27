import { configureStore } from "@reduxjs/toolkit";
import testimonialsReducer from "../slice/index";
import booksReducer from "../slice/index";

const store = configureStore({
  reducer: {
    testimonials: testimonialsReducer,
    books: booksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
