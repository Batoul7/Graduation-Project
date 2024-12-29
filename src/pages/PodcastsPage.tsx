
import HeroCommon from "../components/HeroCommon/HeroCommon";
import KGPodcastSection from "../components/KGPodcastSection/KGPodcastSection";

import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export default function PodcastsPage() {

  const podcasts = useSelector((state: RootState) => state.podcasts.podcasts);

  const firstPodcast = podcasts[0];
  const secondPodcast = podcasts[1];


  return (
    <div>
      <HeroCommon CommonHeroTitle={"Unlock the World of Artificial Intelligence through Podcasts "} CommonHeroText={"Dive deep into the AI universe with our collection of insightful podcasts. Explore the latest trends, breakthroughs, and discussions on artificial intelligence. Whether you're an enthusiast or a professional, our AI podcasts offer a gateway to knowledge and innovation."} podcast={"podcast"} podcastcommonhero={"podcastcommonhero"}  /> 
      <KGPodcastSection title={firstPodcast.title} description={firstPodcast.description} host={firstPodcast.host} rating={3} first={true} />
      <KGPodcastSection title={secondPodcast.title} description={secondPodcast.description} host={secondPodcast.host} rating={2} first={false} />
    </div>
  )
}
