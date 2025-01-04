import { Link } from "react-router-dom"
import FM_Reader from "../FM_Reader/FM_Reader"
import ButtonCommon from "../ButtonCommon/ButtonCommon"
import imgArrowHero from '../../assets/images/Arrows/goArrow.png'
import reaction_dark from '../../assets/images/common/reaction-dark.png'
import reaction_red from '../../assets/images/common/reaction-red.png'
import message from '../../assets/images/common/message.png'
import send from '../../assets/images/common/send.png'
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from "../../redux/store"
import { toggleReaction } from "../../redux/slice/BlogSlice"


interface FM_CardType {
    image?: string,
    name?: string,
    desc?: string,
    link: string,
    blogId: number
}

export default function FM_FilterCard({ link, blogId }: FM_CardType) {

    const blog = useSelector((state: RootState) => state.newsBlog.blogs).find(b => b.id === blogId)

    const dispatch = useDispatch()

    useEffect(() => {
        if (blog) {
            dispatch(toggleReaction(blogId))
        }
    }, [dispatch])

    return (
        <div className='2xl:px-mainpaddinglarge xl:px-[80px] px-4 py-10 md:py-[60px] 2xl:py-20 border-y border-myprimary-dark-20 flex flex-row max-1200:flex-col gap-y-[30px] md:!gap-[10px] 2xl:!gap-[150px]'
            data-aos="zoom-out"
        >
            <FM_Reader show={true} image={blog?.readerIMG} name={blog?.author} category={blog?.category} link="" />
            <div className='flex w-full items-center justify-between gap-5'>
                <div>
                    <h5 className='font-inter text-myprimary-gray-60 font-semibold text-base md:text-lg 2xl::text-xl 2xl:mb-[30px] md:mb-6 mb-5'>{blog?.date}</h5>
                    <h3 className='font-inter text-white font-semibold text-lg md:text-[22px] 2xl:text-[26px] mb-2 md:mb-[10px]'>{blog?.title}</h3>
                    <p className="font-inter text-myprimary-gray-60 mb-5 md:mb-6 2xl:mb-[30px] text-sm md:text-base 2xl:text-lg font-normal">{blog?.desc}</p>
                    <div className="gap-[10px] flex">
                        <button
                            onClick={() => dispatch(toggleReaction(blogId))}
                            className="bg-myprimary-dark-10 text-myprimary-gray-60 px-4 !py-[9.5px] justify-center items-center text-xs flex gap-1 !border-[1px] !border-myprimary-dark-20 rounded-full">
                            <img src={blog && blog.isReact ? reaction_red : reaction_dark} className="w-4 h-4" alt="reaction-dark" />
                            <span>{blog && blog.reactions}</span>
                        </button>
                        <button
                            className="bg-myprimary-dark-10 text-myprimary-gray-60 px-4 !py-[9.5px] justify-center items-center text-xs flex gap-1 !border-[1px] !border-myprimary-dark-20 rounded-full">
                            <img src={message} className="w-4 h-4" alt="message" />
                            <span>{blog && blog.comments}</span>
                        </button>
                        <button
                            className="bg-myprimary-dark-10 text-myprimary-gray-60 px-4 !py-[9.5px] justify-center items-center text-xs flex gap-1 !border-[1px] !border-myprimary-dark-20 rounded-full">
                            <img src={send} className="w-4 h-4" alt="send" />
                            <span>{blog && blog.shares}</span>
                        </button>
                    </div>
                </div>
                <Link to={link} className='md:block hidden'>
                    <ButtonCommon herobtnAndCommon={'herobtnAndCommon'} contentBtn={'View Blog'} imgArrowbtn={imgArrowHero} altimagebtn={'image'} hiddenEyes={"hiddenEyes"} />
                </Link>
            </div>
        </div>
    )
}
