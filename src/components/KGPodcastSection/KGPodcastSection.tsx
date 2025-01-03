
import LeftCard from "../LeftCard/LeftCard";
import icon from './../../assets/images/PodcastsPage/icon-1.png';
import { useSelector } from "react-redux";
import { RootState } from '../../redux/store';
import KGRightPodcast from "../KGRightPodcast/KGRightPodcast";


interface RightPodcast {
  title: string;
  description: string;
  host:string;
  rating:number;
  first:boolean;

}



export default function KGPodcastSection( {title , description , host , rating , first } :RightPodcast ) {
  const podcasts = useSelector((state: RootState) => state.podcasts.podcasts);

  const firstPodcast = podcasts[0];
 
  return (
    <section className="px-4 xl:px-20 2xl:px-mainpaddinglarge bg-myprimary-dark-08 flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center gap-[60px] xl:gap-[120px] lghero:gap-[50px] 2xl:gap-[160px]  py-[80px] ">
      {firstPodcast && (
        <LeftCard 
          title={title}
          description={description}
          icon={icon}
          pageType={"podcast"}
          buttonLabel={"Listen Podcast"}
          host={host}
          rating={rating}  />
      )}
        <KGRightPodcast first={first} />

    </section>
  );
}
