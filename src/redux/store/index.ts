import { configureStore } from "@reduxjs/toolkit";
import faqReducer from "../slice/faqSlice";
import testimonialsReducer from "../slice/index";

const store = configureStore({
  reducer: {
    testimonials: testimonialsReducer,
    faq: faqReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
