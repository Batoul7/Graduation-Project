import podcastimg1 from '/src/assets/images/PodcastsPage/podcast-1.png';
import podcastimg2 from '/src/assets/images/PodcastsPage/podcast-2.png';
import podcastimg3 from '/src/assets/images/PodcastsPage/podcast-3.png';
import podcastimg4 from '/src/assets/images/PodcastsPage/podcast-4.png';
import podcastimg5 from '/src/assets/images/PodcastsPage/podcast-5.png';
import podcastimg6 from '/src/assets/images/PodcastsPage/podcast-6.png';
import podcastimg7 from '/src/assets/images/PodcastsPage/podcast-7.png';
import podcastimg8 from '/src/assets/images/PodcastsPage/podcast-8.png';

interface Podcast {
  id: number;
  title: string;
  description: string;
  host: string;
  totalEpisodes: number;
  average:string;
  releaseFrequency: string;
  rating: number;
  image: string;
}
interface LatestPodcast {
  id: number;
  img:string;
  alt:string;
  title: string;
  description: string;
}

interface PodcastState {
  podcasts: Podcast[];
  latestPodcasts: LatestPodcast[];
}
export const podcastsData: PodcastState = {
  podcasts: [ 
    {
      id: 1,
      title: 'AI Revolution',
      description:'Delves into the transformative impact of AI on individuals, industries, and society.',
      host: 'Dr. Sarah Mitchell',
      totalEpisodes: 50,
      average:'30 min',
      releaseFrequency: 'Weekly',
      rating: 5,
      image: podcastimg1,
    },
    {
      id: 2,
      title: 'AI Conversations',
      description: 'Engage in thought-provoking conversations with leading experts.',
      host: 'Mark Andersen',
      totalEpisodes: 40,
      average:'40 min',
      releaseFrequency: 'Monthly',
      rating: 4,
      image: podcastimg2,
    },
],
  latestPodcasts: [
      {
        id: 1,
        img: podcastimg3,
        alt: 'podcast image3',
        title: 'AI in Healthcare',
        description: 'Dr. Lisa Adams discusses how AI is revolutionizing healthcare, from diagnostic tools to patient care.',
      },
      {
        id: 2,
        img: podcastimg4,
        alt: 'podcast image4',
        title: 'AI Ethics',
        description: 'Explore the ethical dilemmas and considerations surrounding AI with guest speaker Dr. Michael Turner.',
      },
      {
        id: 5,
        img: podcastimg5,
        alt: 'podcast image5',
        title: 'Machine Learning Explained',
        description: 'Dive into the intricacies of machine learning with AI expert Sarah Davis. In this episode',
  
      },
      {
        id: 6,
        img: podcastimg6,
        alt: 'podcast image6',
        title: 'AI and the Future of Work',
        description: 'Dr. Olivia White joins John Parker to discuss the evolving role of AI in the workplace.',
      },
      {
        id: 7,
        img: podcastimg7,
        alt: 'podcast image7',
        title: 'AI in Education',
        description: 'Explore the role of AI in education as Emily Turner discusses how AI is transforming the learning experience.',
      },
      {
        id: 8,
        img: podcastimg8,
        alt: 'podcast image',
        title: 'AI in Entertainment',
        description: 'David Smith as they explore the influence of AI in the entertainment industry.',
      } 
]
};
