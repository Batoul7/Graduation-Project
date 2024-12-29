import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import MhCard from '../MhCard/MhCard';
import MainTitle from '../MainTitle/MainTitle';


export default function LatestPodcasts() {

    const latestPodcasts = useSelector(
        (state: RootState) => state.podcasts.latestPodcasts
      );
    
//  flex flex-wrap justify-between items-center
  return (
    <>
     <MainTitle title="Latest Podcast Episodes" subtitle="Stay Informed with Fresh Content" button={false}/>
    <section className='bg-myprimary-dark-08 px-4 xl:px-20 2xl:px-mainpaddinglarge border-y border-neutral-800 
  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 auto-cols-fr  '>
      {latestPodcasts.map((item,_) => {
        return (
            <MhCard key={item.id} pageType="podcast" imageUrl={item.img} title={item.title} description={item.description} buttonText='Listen Podcast'/>
        )
      })}
    </section>
    </>
  )
}
