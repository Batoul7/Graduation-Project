// import { useSelector} from 'react-redux';
// import { RootState } from "../redux/store";

import LatestBlogs from "../components/LatestBlogs/LatestBlogs";

export default function NewsPage() {

  // const blogs = useSelector((state: RootState) => state.newsBlog.blogs)

  return (
    <div>
      News
      <LatestBlogs />
    </div>
  )
}
