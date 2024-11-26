
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
  reducer: {
    testimonials: testimonialsReducer,
  },
});


export default store;
