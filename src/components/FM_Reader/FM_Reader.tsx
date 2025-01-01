import imgArrowHero from '../../assets/images/Arrows/goArrow.png'
import ButtonCommon from '../ButtonCommon/ButtonCommon'
import { Link } from 'react-router-dom'

interface FM_Reader {
    show: boolean,
    image?: string,
    name?: string,
    category?: string,
    link: string,

}
export default function FM_Reader({show , image , name , category , link} : FM_Reader ) {

    return (
        <div className="flex justify-between items-center max-1200:w-full w-[384px]">
            <div className="flex items-center gap-3">
                <img className='w-[60px] 2xl:w-20' src={image} alt='img' />
                <div>
                    <h3 className="text-xl font-medium text-white mb-2 w-max">{name}</h3>
                    <p className="text-mysecondary-dark-40 text-lg w-max">{category}</p>
                </div>
            </div>
            <Link to={link} className={`${show ? 'block md:hidden' : 'hidden'}`}>
                <ButtonCommon herobtnAndCommon={'herobtnAndCommon'} contentBtn={'View Blog'} imgArrowbtn={imgArrowHero} altimagebtn={'image'} hiddenEyes={"hiddenEyes"} />
            </Link>
        </div>
    )

}
