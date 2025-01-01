  export type BookData = {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
  };
import img1 from './../assets/images/ResourcesPage/img-3.png'
import img2 from './../assets/images/ResourcesPage/img-4.png'
import img3 from './../assets/images/ResourcesPage/img-5.png'
import img4 from './../assets/images/ResourcesPage/img-3.png'
  const books: BookData[] = [
    {
      id: "1",
      title: "FutureTech Trends 2024",
      description: "An ebook that predicts upcoming technology trends for the next year, including AI developments.",
      imageUrl: img1,
    },
    {
      id: "2",
      title: "Space Exploration Ebook",
      description: "An ebook that predicts upcoming technology trends for the next year, including AI developments.",
      imageUrl: img4,
    },
    {
      id: "3",
      title: "Quantum Computing Insights",
      description: "An ebook that predicts upcoming technology trends for the next year, including AI developments.",
      imageUrl: img2,
    },
    {
      id: "4",
      title: "AI Revolution 2030",
      description: "An ebook that predicts upcoming technology trends for the next year, including AI developments.",
      imageUrl: img3,
    },
  ];

  export default books;
