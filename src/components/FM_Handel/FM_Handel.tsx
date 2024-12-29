import handel from '../../assets/images/Handel/No-Data-img.png'
import { HandelImg } from '../../Data/handelImg'

export default function FM_Handel() {
    return (
        <div className="overflow-hidden 2xl:px-mainpaddinglarge xl:px-[80px] px-4 py-5 md:py-10 2xl:py-[50px] border-y-2 border-myprimary-yellow-55 flex flex-col gap-10">
            <img className='mx-auto md:w-96' data-aos="zoom-in-up" src={handel} alt="handel" />
            <h3 className='font-kumbhSans font-bold text-white text-center md:text-3xl text-2xl'>OOPS!!! No Data to Show</h3>
            <div className='flex items-center !gap-32 animate-move-strip'>
                {HandelImg.map((e, index) => {
                    return <img key={index} className='inline-block w-40' src={e.img} alt="logo" />
                })}
            </div>
        </div>
    )
}
