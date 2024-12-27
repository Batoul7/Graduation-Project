import { videosData } from "../../Data/videosData"
import MhCard from "../MhCard/MhCard"


const FeaturedVideos = () => {
  return (
    <div className="flex bg-[#262626] justify-center items-center min-h-screen py-[5%] px-4 xl:px-20 2xl:px-mainpaddinglarge">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mx-auto">
    {videosData.map((video, index) => (
      <MhCard
        key={index}
        imageUrl={video.imageUrl}
        title={video.title}
        description={video.description}
        buttonText=""
        arrowIconUrl=""
        pageType="news"
      />
    ))}
  </div>
</div>

  )
}

export default FeaturedVideos