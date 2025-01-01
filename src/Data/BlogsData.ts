import blog1 from '../assets/images/Plogs/blog-4.png'
import blog2 from '../assets/images/Plogs/blog-3.png'
import blog3 from '../assets/images/Plogs/blog-2.png'
import blog4 from '../assets/images/Plogs/blog-1.png'
import per1 from '../assets/images/common/person-1.png'
import per2 from '../assets/images/common/person-2.png'
import per3 from '../assets/images/common/person-3.png'
import per4 from '../assets/images/common/person-4.png'


export interface Blogs {
    id: number,
    cover: string,
    title: string,
    desc?: string,
    category: string,
    author?: string,
    readerIMG?: string,
    date?: string,
    reactions: number,
    isReact?: boolean,
    comments?: number,
    shares: number,
    views?: number,
}

export const BlogsData: Blogs[] = [
    {
        id: 1,
        cover: blog1,
        title: 'The Quantum Leap in Computing',
        desc: 'Explore the revolution in quantum computing, its applications, and its potential impact on various industries.',
        category: 'Quantum Computing',
        readerIMG: per1,
        author: 'John Techson',
        date: 'October 15, 2023',
        reactions: 24,
        isReact: false,
        comments: 50,
        shares: 20
    },
    {
        id: 2,
        cover: blog2,
        title: 'The Ethical Dilemmas of AI',
        desc: 'A deep dive into ethical challenges posed by AI, including bias, privacy, and transparency.',
        category: 'AI Ethics',
        readerIMG: per2,
        author: 'Sarah Ethicist',
        date: 'November 5, 2023',
        reactions: 32,
        isReact: false,
        comments:72,
        shares: 18
    },
    {
        id: 3,
        cover: blog3,
        title: 'The Mars Colonization Challenge',
        desc: 'Exploring the technical and logistical challenges of human colonization on Mars.',
        category: 'Space Exploration',
        readerIMG: per3,
        author: 'Astronomer X',
        date: 'December 10, 2023',
        reactions: 20,
        isReact: false,
        comments:31,
        shares: 12
    },
    {
        id: 4,
        cover: blog1,
        title: 'Tech Giants Announce New Product Line',
        desc: 'Explore the latest innovations from tech industry leaders, unveiling new products that promise to transform the digital landscape',
        category: 'Technology',
        readerIMG: per4,
        author: 'John Techson',
        date: 'October 15, 2023',
        reactions: 24,
        isReact: false,
        comments: 50,
        shares: 20
    },
    {
        id: 5,
        cover: blog2,
        title: 'The Future of Autonomous Vehicles',
        desc: 'An in-depth analysis of the rapid advancements in autonomous vehicle technology and their impact on transportation.',
        category: 'Politics',
        readerIMG: per2,
        author: 'Sarah Ethicist',
        date: 'October 11, 2023',
        reactions: 32,
        isReact: false,
        comments:72,
        shares: 18
    },
    {
        id: 6,
        cover: blog3,
        title: 'The Mars Colonization Challenge',
        desc: 'Exploring the technical and logistical challenges of human colonization on Mars.',
        category: 'Health',
        readerIMG: per3,
        author: 'Astronomer X',
        date: 'December 10, 2023',
        reactions: 20,
        isReact: false,
        comments:31,
        shares: 12
    },
    {
        id: 7,
        cover: blog3,
        title: 'Tech Startups Secure Record Funding',
        desc: 'An overview of the recent surge in funding for tech startups, shaping the entrepreneurial landscape.',
        category: 'Space Exploration',
        readerIMG: per3,
        author: 'Astronomer X',
        date: 'December 10, 2023',
        reactions: 20,
        isReact: false,
        comments:31,
        shares: 12
    },
    {
        id: 8,
        cover: blog1,
        title: 'COVID-19 Variants',
        desc: 'World leaders gathered at the Global Climate Summit to discuss urgent climate action, emissions reductions, and renewable energy targets.',
        category: 'Health',
        readerIMG: per1,
        author: 'John Techson',
        date: 'December 12, 2023',
        reactions: 10,
        isReact: false,
        comments:12,
        shares: 124
    },
    {
        id: 9,
        cover: blog2,
        title: 'Tech Giants Unveil Cutting-Edge AI Innovations',
        desc: 'World leaders gathered at the Global Climate Summit to discuss urgent climate action, emissions reductions, and renewable energy targets.',
        category: 'Technology',
        readerIMG: per2,
        author: 'Sarah Ethicist',
        date: 'June 10, 2023',
        reactions: 6,
        isReact: false,
        comments:22,
        shares: 92
    },
    {
        id: 10,
        cover: blog3,
        title: 'A Decisive Victory for Progressive Policies',
        desc: 'World leaders gathered at the Global Climate Summit to discuss urgent climate action, emissions reductions, and renewable energy targets.',
        category: 'Politics',
        readerIMG: per3,
        author: 'Sarah Ethicist',
        date: 'June 10, 2023',
        reactions: 2.2,
        isReact: false,
        comments:4,
        shares: 60
    },
    {
        id: 11,
        cover: blog4,
        title: 'Global Climate Summit Addresses Urgent Climate Action',
        desc: 'World leaders gathered at the Global Climate Summit to discuss urgent climate action, emissions reductions, and renewable energy targets.',
        category: 'Environment',
        readerIMG: per4,
        date: 'October 10, 2023',
        author: 'Jane Smith',
        reactions: 14,
        isReact: false,
        comments:19,
        shares: 204
    },
]