import { configureStore } from "@reduxjs/toolkit";

import faqReducer from "../slice/faqSlice";
import testimonialsReducer from "../slice/index";


import testimonialsReducer from '../slice/testimonialsSlice'
import podcastsReducer from '../slice/podcastsSlice'
import { booksReducer } from "../slice/booksSlice";


const store = configureStore({
  reducer: {
    testimonials: testimonialsReducer,
    faq: faqReducer,
    books: booksReducer,
    podcasts: podcastsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
