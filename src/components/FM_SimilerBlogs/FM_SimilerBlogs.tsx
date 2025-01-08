import { Link, useNavigate } from "react-router-dom";
import ButtonCommon from "../ButtonCommon/ButtonCommon"
import imgArrowHero from "../../assets/images/Arrows/goArrow.png"
import reaction_dark from '../../assets/images/common/reaction-dark.png'
import reaction_red from '../../assets/images/common/reaction-red.png'
import sendimg from '../../assets/images/common/send.png'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect } from "react";
import { toggleReaction } from "../../redux/slice/BlogSlice";
import FM_Handel from "../FM_Handel/FM_Handel";

interface FM_SimilerBlog {
    blogId?: string,
    data: FM_SimilerBlogsArray[]
}
interface FM_SimilerBlogsArray {
    id?: string,
    reactions?: number,
    send?: number,
    title?: string,
    category?: string,
    cover?: string,
    isReact?: boolean,
}

export default function FM_SimilerBlogs({ blogId, data }: FM_SimilerBlog) {

    const blog = useSelector((state: RootState) => state.newsBlog.blogs).find((b => b.id === blogId))

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (blog) {
            dispatch(toggleReaction(7))
        }
    }, [dispatch])

    function scroll () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    function Blog7 () {
        navigate('/blog/:id7')
        scroll ()
    }

    return (
        <section className="bg-myprimary-dark-08 2xl:gap-5 py-10 md:py-[60px] 2xl:py-20 border-y border-myprimary-dark-20">
            <div className="2xl:px-mainpaddinglarge xl:px-[80px] px-4 flex flex-wrap justify-between items-center gap-5 2xl:mb-[60px] mb-10">
                <h3 className="text-lg xl:text-[22px] 2xl:text-[28px] font-medium font-inter text-white">Similar News</h3>
                <ButtonCommon onClick={Blog7} herobtnAndCommon={'herobtnAndCommon'} contentBtn={'View All News'} imgArrowbtn={imgArrowHero} altimagebtn={'image'} hiddenEyes={"hiddenEyes"} />
            </div>
            {data.length > 0 ?
                <div className="2xl:px-mainpaddinglarge xl:px-[80px] px-4 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
                    {data.map((e, index) => {
                        return (
                            <div key={index}>
                                <img src={e.cover} className="w-full mb-4 2xl:mb-5" alt="blog" />
                                <h3 className="text-base 2xl:text-xl font-inter text-white font-semibold 2xl:mb-2.5 mb-1">{e.title}</h3>
                                <p className="text-base 2xl:text-xl font-inter text-myprimary-gray-60 font-normal mb-4 2xl:mb-5">{e.category}</p>
                                <div className="flex gap-[50px] justify-between items-center">
                                    <div className="flex gap-2 2xl:gap-2.5">
                                        <button
                                            onClick={() => dispatch(toggleReaction(7))}
                                            className="w-[75px] 2xl:w-[85px] bg-myprimary-dark-10 text-myprimary-gray-60 px-4 !py-[9.5px] justify-center items-center text-sm 2xl:text-lg flex gap-1 !border !border-myprimary-dark-20 rounded-full">
                                            <img src={e.isReact ? reaction_red : reaction_dark} className="w-6" alt="reaction-dark" />
                                            <span>{e.reactions}</span>
                                        </button>
                                        <button
                                            className="w-[75px] 2xl:w-[85px] bg-myprimary-dark-10 text-myprimary-gray-60 px-4 !py-[9.5px] justify-center items-center text-sm 2xl:text-lg flex gap-1 !border !border-myprimary-dark-20 rounded-full">
                                            <img src={sendimg} className="w-6" alt="reaction-dark" />
                                            <span>{e.send}</span>
                                        </button>
                                    </div>
                                    <Link to={`/blog/:id${e.id}`} className="w-[54.10%]" onClick={scroll}>
                                        <button className="w-full !border !border-myprimary-dark-20 py-3.5 2xl:py-4.5 font-inter px-5 2xl:px-6 rounded-xl text-sm 2xl:text-[17px] text-myprimary-gray-60 flex justify-center items-center gap-1">
                                            Read More
                                            <img src={imgArrowHero} alt="arrow" />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            : <FM_Handel />}
        </section>
    )
}
