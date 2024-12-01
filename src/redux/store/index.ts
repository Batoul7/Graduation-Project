import { configureStore } from "@reduxjs/toolkit";
import faqReducer from "../slice/faqSlice";
import testimonialsReducer from '../slice/testimonialsSlice'
import podcastsReducer from '../slice/podcastsSlice'
import { booksReducer } from "../slice/booksSlice";
import { BlogsReducer } from "../slice/BlogSlice";
import formReducer from '../slice/formSlice'

const store = configureStore({
  reducer: {
    testimonials: testimonialsReducer,
    faq: faqReducer,
    books: booksReducer,
    podcasts: podcastsReducer,
    newsBlog: BlogsReducer,
    form: formReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
