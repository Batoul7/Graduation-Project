import BCard from './BCard'

interface BCardProps {
  icon:string;
  title: string;
  subtitle: string;
  text: string;
}
interface BcardData {
  cardData: BCardProps[];
}

export default function BCards({cardData} : BcardData ) {

  return (
    <div className="bg-myprimary-dark-08 px-4 xl:px-20 2xl:px-mainpaddinglarge border-y border-neutral-800 
       flex justify-center xl:justify-between items-center flex-wrap ">
      {
       cardData.map((item,index) => {
        return (
            <BCard key={index} icon={item.icon} title={item.title} subtitle={item.subtitle} text={item.text}/>
        )
       }) 
      }
    </div>
  )
}
