import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    testimonials: testimonialsReducer,
    podcasts: podcastsReducer,
    books: booksReducer,
    forms: formsReducer,
    faqs: faqsReducer,
  },
});

export default store;
