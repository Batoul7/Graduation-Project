import Profile1 from '/src/assets/images/HomePage/Profile-1.png'
import Profile2 from '/src/assets/images/HomePage/Profile-2.png'
import Profile3 from '/src/assets/images/HomePage/Profile-3.png'
import Profile4 from '/src/assets/images/HomePage/Profile-4.png'
import Profile5 from '/src/assets/images/HomePage/Profile-5.png'
import Profile6 from '/src/assets/images/HomePage/Profile-6.png'

interface Testimonial {
    id: number;
    img: string;
    alt:string;
    name: string;
    location: string;
    text: string;
    rating: number;
  }

  export const  testimonialsData: Testimonial[] = [
      {
        id: 1,
        img:Profile1,
        alt:"Sarah Thompson",
        name: "Sarah Thompson",
        location: "San Francisco, USA",
        text: "The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated.",
        rating: 3,
      },
      {
        id: 2,
        img:Profile2,
        alt:"Raj Patel",
        name: "Raj Patel",
        location: "Mumbai, India",
        text: "The whitepapers on renewable energy strategies have greatly influenced my work. They offer detailed data and analysis, helping me make informed decisions.",
        rating: 5,
      },
      {
        id: 3,
        img:Profile3,
        alt:"Emily Adams",
        name: "Emily Adams",
        location: "London, UK",
        text: "The AI in healthcare reports have been an essential resource for our hospital. They highlight the latest innovations and best practices, improving patient care.",
        rating:4,
      },
      {
        id: 4,
        img:Profile4,
        alt:"Alan Jackson",
        name: "Alan Jackson",
        location: "Houston, USA",
        text: "The reports on space mining prospects have fueled my passion for space exploration. They provide a comprehensive view of what lies beyond Earth.",
        rating: 3,
      },
      {
        id: 5,
        img:Profile5,
        alt:"Jessica Miller",
        name: "Jessica Miller",
        location: "Boston, USA",
        text: "The research papers on genomic breakthroughs have been a goldmine of information. They've shaped the direction of my research in genomics.",
        rating: 4,
      },
      {
        id: 6,
        img:Profile6,
        alt:"Diego Lopez",
        name: "Diego Lopez",
        location: "Barcelona, Spain",
        text: "The ebooks on renewable energy strategies have given me the insights I needed to pivot our startup toward sustainability.",
        rating: 5,
      },
    ]
  