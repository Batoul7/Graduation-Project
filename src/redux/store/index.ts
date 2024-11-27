import { configureStore } from "@reduxjs/toolkit";

import testimonialsReducer from "../slice/index";
import booksReducer from "../slice/index";

import testimonialsReducer from '../slice/testimonialsSlice'
import podcastsReducer from '../slice/podcastsSlice'


const store = configureStore({
  reducer: {
    testimonials: testimonialsReducer,

    books: booksReducer,

    podcasts: podcastsReducer,

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
