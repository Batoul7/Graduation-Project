import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

interface Cards {
  id: number;
  title: string;
  info: string;
}
interface PropsRight {
  first: boolean;
}



const PodcastItem: React.FC<{ podcast: any }> = ({ podcast }) => (
  <div key={podcast.id} data-aos="fade-up"  className='max-391:p-5 lg:p-0 w-full lg:w-[57.5%]'>
    <img src={podcast.image} alt={podcast.title} className="w-full md:h-[297px] 2xl:h-[412px] object-cover rounded-2xl" />
    <h3 className='font-semibold text-lg leading-7 xl:text-[22px] xl:leading-8 2xl:text-[26px] 2xl:leading-[39px] text-white pt-6 pb-[10px]'>{podcast.subtitle}</h3>
    <p className='text-sm leading-5 xl:text-base xl:leading-6 2xl:text-lg 2xl:leading-7 font-normal text-myprimary-gray-60 pb-10'>{podcast.description}</p>
    <div className='flex flex-col lg:flex-row gap-5'>
      {podcast.cards.map((card: Cards) => (
        <div key={card.id} className='flex flex-col p-5 lg:w-[238.33px] sm:p-6 2xl:w-[292.33px] 2xl:p-[30px] rounded-lg border border-neutral-800 bg-myprimary-dark-10'>
          <h3 className='font-normal text-sm leading-5 xl:text-base xl:leading-6 2xl:text-lg 2xl:leading-7 rounded-xl pb-1 text-myprimary-gray-60'>{card.title}</h3>
          <p className='font-medium text-base leading-6 xl:text-lg xl:leading-7 2xl:text-xl 2xl:leading-[30px] text-white'>{card.info}</p>
        </div>
      ))}
    </div>
  </div>
);

const KGRightPodcast: React.FC<PropsRight> = ({ first }) => {
  const podcasts = useSelector((state: RootState) => state.podcasts.podcasts);
  const firstPodcasts = podcasts.slice(0, 1);
  const secondPodcast = podcasts.slice(1, 2);

  return (
    <>
      {first ? (
        firstPodcasts.map((podcast) => <PodcastItem podcast={podcast} key={podcast.id} />)
      ) : (
        secondPodcast.map((podcast) => <PodcastItem podcast={podcast} key={podcast.id} />)
      )}
    </>
  );
}

export default KGRightPodcast;
