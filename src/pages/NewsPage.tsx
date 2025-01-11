import LatestBlogs from "../components/LatestBlogs/LatestBlogs";
import HeroCommon from "../components/HeroCommon/HeroCommon";
import FeaturedVideos from "../components/FeaturedVideos/FeaturedVideos";
import MainTitle from "../components/B_MainTitle/MainTitle";
import FM_Filteration from "../components/FM_Filteration/FM_Filteration";
import { News_Filteration } from "../Data/BtnsFilterData";

export default function NewsPage() {

  return (
    <div className="bg-myprimary-dark-10">
      <HeroCommon CommonHeroTitle={"Today's Headlines: Stay Informed "} CommonHeroText={"Explore the latest news from around the world. We bring you up-to-the-minute updates on the most significant events, trends, and stories. Discover the world through our news coverage."} neww={"neww"}  newcommonhero={"newcommonhero"} />
      <LatestBlogs />
      <MainTitle link="/blog/:id7" title="Discover the World of Headlines" subtitle="Welcome to Our News Hub" button={true} btntext='View All Blogs'/>
      <FM_Filteration btns={News_Filteration} btn="Read More"/>
      <MainTitle title="Visual Insights for the Modern Viewer" subtitle="Featured Videos" button={true} btntext='View All'/>
      <FeaturedVideos />
    </div>
  )
}
