import { createSlice } from "@reduxjs/toolkit";
import { Podcast, podcastData } from "../../Data/PodcastsData";

// PODCASTS
const podcastsInitialState = {
    podcasts: podcastData
  };
  
  const podcastsSlice = createSlice({
    name: 'podcasts',
    initialState: podcastsInitialState,
    reducers: {},
  });
  
  export const selectFirstPodcast = (state: { podcasts: { podcasts: Podcast[] } }): Podcast[] => state.podcasts.podcasts.slice(0, 1);
  export const selectSecondPodcast = (state: { podcasts: { podcasts: Podcast[] } }): Podcast[] => state.podcasts.podcasts.slice(1, 2);
  export const selectLatestPodcast = (state: { podcasts: { podcasts: Podcast[] } }): Podcast[] => state.podcasts.podcasts.slice(-6);
  
  export default podcastsSlice.reducer;