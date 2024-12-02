import podcastimg1 from '/src/assets/images/PodcastsPage/podcast-1.png';
import podcastimg2 from '/src/assets/images/PodcastsPage/podcast-2.png';
import podcastimg3 from '/src/assets/images/PodcastsPage/podcast-3.png';
import podcastimg4 from '/src/assets/images/PodcastsPage/podcast-4.png';
import podcastimg5 from '/src/assets/images/PodcastsPage/podcast-5.png';
import podcastimg6 from '/src/assets/images/PodcastsPage/podcast-6.png';
import podcastimg7 from '/src/assets/images/PodcastsPage/podcast-7.png';
import podcastimg8 from '/src/assets/images/PodcastsPage/podcast-8.png';
import podcasticonArrow from '/src/assets/images/Arrows/goArrow.png';

export interface CardTime {
  txt: string;
  num: string;
}

export interface Podcast {
  id: number;
  img: string;
  alt: string;
  title: string;
  name: string;
  text: string;
  cardTime: CardTime[];
  icon: string;
  btnlisten: string;
}

export const podcastData: Podcast[] = [
  {
    id: 1,
    img: podcastimg1,
    alt: 'podcast image1',
    title: 'Delves into the transformative impact of AI',
    text: 'Join Dr. Sarah Mitchell as she delves into the transformative impact of AI on industries, featuring expert interviews and real-world case studies. Explore the possibilities of AI in healthcare, finance, and more.',
    cardTime: [
      { txt: 'Total Episodes', num: '50' },
      { txt: 'Average Episode Length', num: '30 min' },
      { txt: 'Release Frequency', num: 'Weekly' }
    ],
    name: '',
    icon: '',
    btnlisten: ''
  },
  {
    id: 2,
    img: podcastimg2,
    alt: 'podcast image2',
    title: 'Engage in thought-provoking conversations with leading experts.',
    text: 'Mark discusses the future of AI, the impact on society, and how its shaping industries worldwide. Engage in thought-provoking conversations with leading experts.',
    cardTime: [
      { txt: 'Total Episodes', num: '50' },
      { txt: 'Average Episode Length', num: '40 min' },
      { txt: 'Release Frequency', num: 'Monthly' }
    ],
    name: '',
    icon: '',
    btnlisten: ''
  },
  {
    id: 3,
    img: podcastimg3,
    alt: 'podcast image3',
    title: 'AI in Healthcare',
    text: 'Dr. Lisa Adams discusses how AI is revolutionizing healthcare, from diagnostic tools to patient care.',
    btnlisten: 'Listen Podcast',
    icon: podcasticonArrow,
    cardTime: [],
    name: ''
  },
  {
    id: 4,
    img: podcastimg4,
    alt: 'podcast image4',
    title: 'AI Ethics',
    text: 'Explore the ethical dilemmas and considerations surrounding AI with guest speaker Dr. Michael Turner.',
    btnlisten: 'Listen Podcast',
    icon: podcasticonArrow,
    cardTime: [],
    name: ''
  },
  {
    id: 5,
    img: podcastimg5,
    alt: 'podcast image5',
    title: 'Machine Learning Explained',
    text: 'Dive into the intricacies of machine learning with AI expert Sarah Davis. In this episode',
    btnlisten: 'Listen Podcast',
    icon: podcasticonArrow,
    cardTime: [],
    name: ''
  },
  {
    id: 6,
    img: podcastimg6,
    alt: 'podcast image6',
    title: 'AI and the Future of Work',
    text: 'Dr. Olivia White joins John Parker to discuss the evolving role of AI in the workplace.',
    btnlisten: 'Listen Podcast',
    icon: podcasticonArrow,
    cardTime: [],
    name: ''
  },
  {
    id: 7,
    img: podcastimg7,
    alt: 'podcast image7',
    title: 'AI in Education',
    text: 'Explore the role of AI in education as Emily Turner discusses how AI is transforming the learning experience.',
    btnlisten: 'Listen Podcast',
    icon: podcasticonArrow,
    cardTime: [],
    name: ''
  },
  {
    id: 8,
    img: podcastimg8,
    alt: 'podcast image',
    title: 'AI in Entertainment',
    text: 'David Smith as they explore the influence of AI in the entertainment industry.',
    btnlisten: 'Listen Podcast',
    icon: podcasticonArrow,
    cardTime: [],
    name: ''
  }
];
