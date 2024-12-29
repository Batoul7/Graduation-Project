import { videosData } from "../../Data/videosData"
import MhCard from "../MhCard/MhCard"

const FeaturedVideos = () => {
  return (
    <div className="bg-myprimary-dark-08  grid grid-cols-1 md:grid-cols-2 md:gap-x-[100px] 3xl:gap-x-[160px]
     px-4 xl:px-20 2xl:px-mainpaddinglarge border-y border-neutral-800">
    {videosData.map((video, index) => (
      <MhCard
        key={index}
        imageUrl={video.imageUrl}
        title={video.title}
        description={video.description}
        buttonText=""
        pageType="news"
      />
    ))}
  </div>
  )
}

export default FeaturedVideos