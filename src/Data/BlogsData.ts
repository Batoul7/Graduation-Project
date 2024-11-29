import blog1 from '../assets/images/Plogs/blog-4.png'
import blog2 from '../assets/images/Plogs/blog-3.png'
import blog3 from '../assets/images/Plogs/blog-2.png'
import blog4 from '../assets/images/Plogs/blog-1.png'


interface Blogs {
    id: number,
    cover: string,
    title: string,
    desc?: string,
    category: string,
    author?: string,
    readerIMG?: string,
    readerName?: string,
    readingTime?: string,
    reactions: number,
    comments?: number,
    shares: number,
    views?: number,
    date?: string
}

export const BlogsData: Blogs[] = [
    {
        id: 1,
        cover: blog1,
        title: 'COVID-19 Variants',
        desc: 'World leaders gathered at the Global Climate Summit to discuss urgent climate action, emissions reductions, and renewable energy targets.',
        category: 'Health',
        reactions: 10,
        shares: 124
    },
    {
        id: 2,
        cover: blog2,
        title: 'Tech Giants Unveil Cutting-Edge AI Innovations',
        category: 'Technology',
        reactions: 6,
        shares: 92
    },
    {
        id: 3,
        cover: blog3,
        title: 'A Decisive Victory for Progressive Policies',
        category: 'Politics',
        reactions: 2.2,
        shares: 60
    },
    {
        id: 4,
        cover: blog4,
        title: 'Global Climate Summit Addresses Urgent Climate Action',
        desc: 'World leaders gathered at the Global Climate Summit to discuss urgent climate action, emissions reductions, and renewable energy targets.',
        category: 'Environment',
        date: 'October 10, 2023',
        author: 'Jane Smith',
        reactions: 14,
        shares: 204
    },
]