
import { configureStore } from "@reduxjs/toolkit";
import testimonialsReducer from "../slice/index";

const store = configureStore({
  reducer: {
    testimonials: testimonialsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
