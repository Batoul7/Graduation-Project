import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { useEffect } from "react"
import { toggleReaction } from "../../redux/slice/BlogSlice"
import imgArrowHero from "../../assets/images/Arrows/goArrow.png"
import reaction_dark from '../../assets/images/common/reaction-dark.png'
import reaction_red from '../../assets/images/common/reaction-red.png'
import sendimg from '../../assets/images/common/send.png'
import { Link } from "react-router-dom"

interface FM_CardType {
    image?: string,
    blogId: string,
    delay: number
}

export default function FM_SimilerBlogCard({ blogId, delay}: FM_CardType) {

    const blog = useSelector((state: RootState) => state.newsBlog.blogs).find(b => b.id === blogId)

    const dispatch = useDispatch()

    function scroll() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        if (blog) {
            dispatch(toggleReaction(blogId))
        }
    }, [dispatch])

    return (
        <div  data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay={delay}
            data-aos-offset="0">
            <img src={blog?.cover} className="2xl:h-[222px] h-[185px] w-full mb-4 2xl:mb-5 object-cover rounded-lg" alt="blog" />
            <h3 className="text-base 2xl:text-xl font-inter text-white font-semibold 2xl:mb-2.5 mb-1">{blog?.title}</h3>
            <p className="text-base 2xl:text-xl font-inter text-myprimary-gray-60 font-normal mb-4 2xl:mb-5">{blog?.category}</p>
            <div className="flex gap-3 justify-between items-center">
                <div className="flex gap-2 2xl:gap-2.5">
                    <button
                        onClick={() => dispatch(toggleReaction(blogId))}
                        className="xl:w-[70px] 2xl:w-[80px] bg-myprimary-dark-10 text-myprimary-gray-60 px-4 !py-[9.5px] justify-center items-center text-sm 2xl:text-lg flex gap-1 !border !border-myprimary-dark-20 rounded-full">
                        <img src={blog?.isReact ? reaction_red : reaction_dark} className="w-6" alt="reaction-dark" />
                        <span>{blog?.reactions}</span>
                    </button>
                    <button
                        className="w-[85px] bg-myprimary-dark-10 text-myprimary-gray-60 px-4 !py-[9.5px] justify-center items-center text-sm 2xl:text-lg flex gap-1 !border !border-myprimary-dark-20 rounded-full">
                        <img src={sendimg} className="w-6" alt="reaction-dark" />
                        <span>{blog?.shares}</span>
                    </button>
                </div>
                <Link to={`/blog/:id${blogId}`} className="w-[40%] md:w-[54.10%]" onClick={scroll}>
                    <button className="w-full !border !border-myprimary-dark-20 py-3.5 2xl:py-4.5 font-inter px-5 2xl:px-6 rounded-xl text-sm 2xl:text-[17px] text-myprimary-gray-60 flex justify-center items-center gap-1">
                        Read More
                        <img src={imgArrowHero} alt="arrow" />
                    </button>
                </Link>
            </div>
        </div>
    )
}
