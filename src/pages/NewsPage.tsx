// import { useSelector} from 'react-redux';
// import { RootState } from "../redux/store";
import LatestBlogs from "../components/LatestBlogs/LatestBlogs";
import HeroCommon from "../components/HeroCommon/HeroCommon";
import FeaturedVideos from "../components/FeaturedVideos/FeaturedVideos";

export default function NewsPage() {

  // const blogs = useSelector((state: RootState) => state.newsBlog.blogs)

  return (
    <div className="bg-myprimary-dark-10">
      <HeroCommon CommonHeroTitle={"Today's Headlines: Stay Informed "} CommonHeroText={"Explore the latest news from around the world. We bring you up-to-the-minute updates on the most significant events, trends, and stories. Discover the world through our news coverage."} neww={"neww"} podcast={""} Resourse={""} newcommonhero={"newcommonhero"} podcastcommonhero={""} Resourcecommonhero={""} />
      <LatestBlogs />
      <FeaturedVideos />
    </div>
  )
}
