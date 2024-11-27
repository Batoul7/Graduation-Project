
import { configureStore } from "@reduxjs/toolkit";
import testimonialsReducer from '../slice/testimonialsSlice'
import podcastsReducer from '../slice/podcastsSlice'

const store = configureStore({
  reducer: {
    testimonials: testimonialsReducer,
    podcasts: podcastsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
