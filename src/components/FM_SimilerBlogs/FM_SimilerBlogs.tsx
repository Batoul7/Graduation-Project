import { useNavigate } from "react-router-dom";
import ButtonCommon from "../ButtonCommon/ButtonCommon"
import imgArrowHero from "../../assets/images/Arrows/goArrow.png"
import FM_Handel from "../FM_Handel/FM_Handel";
import FM_SimilerBlogCard from "../FM_SimilerBlogCard/FM_SimilerBlogCard";

interface FM_SimilerBlog {
    data: FM_SimilerBlogsArray[]
}
interface FM_SimilerBlogsArray {
    id?: string,
    reactions?: number,
    shares?: number,
    title?: string,
    category?: string,
    cover?: string,
    isReact?: boolean,
}

export default function FM_SimilerBlogs({ data }: FM_SimilerBlog) {

    const navigate = useNavigate()

    function Blog7() {
        navigate('/blog/:id7')
        scroll()
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
                            <FM_SimilerBlogCard key={index} blogId={`${e.id}`} delay={index*300} />
                        )
                    })}
                </div>
                : <FM_Handel />}
        </section>
    )
}
