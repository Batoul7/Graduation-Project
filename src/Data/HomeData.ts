import icon1 from './../assets/images/HomePage/icon-1.png'
import icon2 from './../assets/images/HomePage/icon-2.png'
import icon3 from './../assets/images/HomePage/icon-3.png'

interface HeroCard {
    id?:number;
    number:string ;
    mult:string;
    parcard:string;
  }
  interface CardData {
    title:string;
    description:string;
  }

export const CounterCard: Array<HeroCard> = [
    {
        id: 1,
        number: '300',
        mult: "+",
        parcard: "Resources available"
    } ,
    {
        id: 2,
        number: '12k',
        mult: "+",
        parcard: "Total Downloads"
    } ,
    {
        id: 3,
        number: '10k',
        mult: "+",
        parcard: "Active Users"
    } ,

]
export const CounterCard2: Array<HeroCard> = [
    {
        id: 1,
        number: '300',
        mult: "+",
        parcard: "Resources available"
    } ,
    {
        id: 2,
        number: '12k',
        mult: "+",
        parcard: "Total Downloads"
    } ,
    {
        id: 3,
        number: '10k',
        mult: "+",
        parcard: "Active Users"
    } ,
    {
        id: 4,
        number: '100k',
        mult: "+",
        parcard: "Countries Accesses "
    } ,

]


export const cardsData: Array<CardData> = [
    {
        title:'Quantity' ,
        description:'Over 1,000 articles on emerging tech trends and breakthroughs.' ,
    } ,
    {
        title:'Variety' ,
        description:'Articles cover fields like AI, robotics, biotechnology, and more.' ,
    } ,
    {
        title:'Frequency' ,
        description:'Fresh content added daily to keep you up to date.' ,
    } ,
    {
        title:'Authoritative' ,
        description:'Written by our team of tech experts and industry professionals.' ,
    } ,

]
    
export const cardsData2: Array<CardData> = [
    {
        title:'Depth' ,
        description:'500+ research articles for in-depth understanding.' ,
    } ,
    {
        title:'Graphics' ,
        description:'Visual aids and infographics to enhance comprehension.' ,
    } ,
    {
        title:'Trends' ,
        description:'Explore emerging trends in future technology research.' ,
    } ,
    {
        title:'Contributors' ,
        description:'Contributions from tech researchers and academics.' ,
    } ,

]    


export const BcardData = [
    {
        icon:icon1,
        title:"Latest News Updates",
        subtitle:"Stay Current",
        text:"Over 1,000 articles published monthly"
    },
    {
        icon:icon2,
        title:"Expert Contributors",
        subtitle:"Trusted Insights",
        text:"50+ renowned AI experts on our team"
    },
    {
        icon:icon3,
        title:"Global Readership",
        subtitle:"Worldwide Impact",
        text:"2 million monthly readers"
    },
]
