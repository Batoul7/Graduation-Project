import img1 from './../assets/images/HomePage/img-1.png'
import img2 from './../assets/images/HomePage/img-2.png'

export interface Book {
    id: number;
    type: "Ebook" | "Whitepaper";
    title: string;
    topicsCoverage: string;
    total: string;
    downloadFormat: string;
    description: string;
    img: string;
  }
  
  export const books: Book[] = [
    {
      id: 1,
      type: "Ebook",
      title: "Variety of Topics",
      topicsCoverage: "Topics include AI in education (25%), renewable energy (20%), healthcare (15%), space exploration (25%), and biotechnology (15%).",
      total: "Over 100 ebooks",
      downloadFormat: "PDF format for access",
      description: "Ebooks are authored by renowned experts with an average of 15 years of experience.",
      img: img1,

    },
    {
      id: 2,
      type: "Whitepaper",
      title: "Topics Coverage",
      topicsCoverage: "Whitepapers cover quantum computing (20%), AI ethics (15%), space mining prospects (10%), AI in healthcare (15%), and renewable energy strategies (30%).",
      total: "Over 50 whitepapers",
      downloadFormat: "PDF format for access",
      description: "Whitepapers are authored by subject matter experts with an average of 20 years of experience.",
      img: img2,
    },
  ];
  