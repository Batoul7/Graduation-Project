import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import img1 from './../../assets/images/ResourcesPage/img-1.png'
import img2 from './../../assets/images/ResourcesPage/img-2.png'
import img3 from './../../assets/images/ResourcesPage/icon-1.png'
import img4 from './../../assets/images/ResourcesPage/icon-2.png'
import img5 from './../../assets/images/ResourcesPage/img-4.png'
import img6 from './../../assets/images/ResourcesPage/img-5.png'
export interface BookData {
  imageUrl: string;
  imageUrl2: string;
  imageUrl3: string;
  imageUrl4: string;
  title: string;
  title2: string;
  description: string;
  description2: string;
  description3: string;
  description4: string;
  date: string;
  category: string;
  author: string;
  date2: string;
  category2: string;
  author2: string;
}

interface BookState {
  activeTab: string;
  data: BookData[];
}

const initialState: BookState = {
  activeTab: 'Whitepapers',
  data: [
    {
      imageUrl: img1,
      imageUrl2: img2,
      imageUrl3: img3,
      imageUrl4: img4,
      title: 'Quantum Computing Whitepaper',
      title2: 'Space Exploration Whitepaper',
      description: 'An in-depth whitepaper exploring the principles, applications, and potential impact of quantum computing.',
      description2: 'Provides technical specifications and requirements for implementing quantum computing systems.',
      description3: 'An in-depth whitepaper covering the latest advancements in space exploration, including Mars missions and asteroid mining.',
      description4: 'Explores Mars colonization, asteroid resource potential, and space tourism.',
      date: 'July 2023',
      category: 'Quantum Computing',
      author: 'Dr. Quantum',
      date2: 'September 2023',
      category2: 'Space Exploration',
      author2: 'FutureTech Space Division',
    },
    {
      imageUrl: img2,
      imageUrl2: img5,
      imageUrl3: img3,
      imageUrl4: img4,
      title: 'Mastering AI: The Ebook',
      title2: 'Advanced Machine Learning Techniques',
      description: 'A comprehensive guide to mastering artificial intelligence, with practical examples and use cases.',
      description2: 'Delve into supervised, unsupervised, and reinforcement learning techniques with real-world projects.',
      description3: 'Learn about ethical AI and how to develop responsible AI systems.',
      description4: 'Includes hands-on examples in Python and TensorFlow.',
      date: 'May 2023',
      category: 'Artificial Intelligence',
      author: 'AI Experts Group',
      date2: 'June 2023',
      category2: 'Artificial Intelligence',
      author2: 'TechVision Publications',
    },
    {
      imageUrl: img5,
      imageUrl2: img6,
      imageUrl3: img3,
      imageUrl4: img4,
      title: 'Global Tech Reports 2023',
      title2: 'AI Impact Analysis',
      description: 'A detailed report on the global impact of emerging technologies like AI, Quantum Computing, and Blockchain.',
      description2: 'Analyzes the potential economic and societal changes driven by technology advancements.',
      description3: 'Provides insights into future trends in the technology sector.',
      description4: 'Focuses on data-driven forecasts and market analysis.',
      date: 'October 2023',
      category: 'Space Exploration',
      author: 'Global Tech Insights',
      date2: 'November 2023',
      category2: 'Reports',
      author2: 'World Technology Forum',
    },
  ],
};

const bookDataSlice = createSlice({
  name: 'bookData',
  initialState,
  reducers: {
    setActiveTab(state, action: PayloadAction<string>) {
      state.activeTab = action.payload;
    },
  },
});

export const { setActiveTab } = bookDataSlice.actions;
export const selectBookData = (state: any) => state.bookData.data;
export const selectActiveTab = (state: any) => state.bookData.activeTab;
export default bookDataSlice.reducer;
