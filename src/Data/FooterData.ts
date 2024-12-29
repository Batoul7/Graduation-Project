import icon from './../assets/images/Footer/icon.png'
import twitter from './../assets/images/Footer/twitter.png'
import linkedin from './../assets/images/Footer/LinkedIn.png'

interface FooterItem {
    txt: string ;
    new?: boolean;
    btn?: boolean;
}

interface FooterDataType {
    title: string;
    txts: FooterItem[];
}
export const FooterData : FooterDataType [] = [
    {
        title: 'Home',
        txts: [
            {
                txt: 'Features'
            },
            {
                txt: 'Blogs'
            },
            {

                txt: 'Resources',
                new: true
            },
            {
                txt: 'Testimonials'
            },
            {
                txt: 'Contact Us'
            },
            {
                txt: 'Newsletter'
            }
        ]
    },
    {
        title: 'News',
        txts: [
            {
                txt: 'Trending Stories'
            },
            {
                txt: 'Featured Videos'
            },
            {
                txt: 'Technology'
            },
            {
                txt: 'Health'
            },
            {
                txt: 'Politics'
            },
            {
                txt: 'Environment'
            }
        ]
    },
    {
        title: 'Blogs',
        txts: [
            {
                txt: 'Quantum Computing'
            },
            {
                txt: 'AI Ethics'
            },
            {
                txt: 'Space Exploration'
            },
            {
                txt: 'Biotechnology',
                new: true,
            },
            {
                txt: 'Renewable Energy'
            },
            {
                txt: 'Biohacking'
            }
        ]
    },
    {
        title: 'Podcasts',
        txts: [
            {
                txt: 'AI Revolution'
            },
            {
                txt: 'AI Revolution',
                new: true
            },
            {
                txt: 'TechTalk AI'
            },
            {
                txt: 'AI Conversations'
            },

        ]
    },
    {
        title: 'Resources',
        txts: [
            {
                btn: true,
                txt: 'Whitepapers'
            },
            {
                btn: true,
                txt: 'Ebooks'
            },
            {
                btn: true,
                txt: 'Reports'
            },
            {
                btn: true,
                txt: 'Research Papers'
            },

        ]
    }
]
export const icons = [
    {
        icon: twitter
    },
    {
        icon: icon
    },
    {
        icon: linkedin
    },

]