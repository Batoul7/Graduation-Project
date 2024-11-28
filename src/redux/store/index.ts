import { configureStore } from "@reduxjs/toolkit";

import faqReducer from "../slice/faqSlice";
import testimonialsReducer from "../slice/index";


import testimonialsReducer from '../slice/testimonialsSlice'
import podcastsReducer from '../slice/podcastsSlice'
import { booksReducer } from "../slice/booksSlice";
import { BlogsReducer } from "../slice/blogSlice";


const store = configureStore({
  reducer: {
    testimonials: testimonialsReducer,
    faq: faqReducer,
    books: booksReducer,
    podcasts: podcastsReducer,
    newsBlog: BlogsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
