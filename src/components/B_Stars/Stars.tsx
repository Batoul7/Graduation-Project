import StarYellow from '../../assets/images/common/star-yellow.png';
import Starstroke from '../../assets/images/common/star-stroke.png'
interface StarsProps {
    rating: number | undefined ;
    leftcardPod ?: string;
}

const Stars: React.FC<StarsProps> = ({rating , leftcardPod}) => {
  return (
    <div className={`
    w-fit mx-auto mt-[-22px] bg-myprimary-dark-08
    flex gap-[7px] items-center justify-between
    py-[10px] px-4 rounded-[100px] border border-neutral-800
    ${leftcardPod ? 'mt-auto' : ''}`}>
      {Array.from({ length: 5 }).map((_, index) => (
        (rating !== undefined && index < rating) ? ( 
          <img key={index} src={StarYellow} alt="star-yellow"/>
        ) : (
          <img key={index} src={Starstroke} alt="star-stroke"/>
        )
      ))}
    </div>
  )
}
export default Stars;
