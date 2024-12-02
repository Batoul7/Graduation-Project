import { videosData } from "../../Data/videosData"
import MhCard from "../MhCard/MhCard"


const FeaturedVideos = () => {
  return (
    <div className="flex justify-center items-center min-h-screen px-[8.4%]">
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