import { createSlice } from '@reduxjs/toolkit';
import { podcastsData } from '../../Data/PodcastsData';


interface Cards {
  id: number ;
  title: string;
  info: string;

}

interface Podcast {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  host: string;
  cards: Cards[];
  rating: number;
  image: string;
}
interface LatestPodcast {
  id: number;
  img:string;
  title: string;
  description: string;
}

interface PodcastState {
  podcasts: Podcast[];
  latestPodcasts: LatestPodcast[];
}
const initialState: PodcastState = {
  podcasts: podcastsData.podcasts, 
  latestPodcasts: podcastsData.latestPodcasts, 
};

const podcastsSlice = createSlice({
  name: 'podcasts',
  initialState,
  reducers: {},
});

export default podcastsSlice.reducer;
