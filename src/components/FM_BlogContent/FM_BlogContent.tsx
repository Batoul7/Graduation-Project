import { useEffect, useState } from "react"
import more from "../../assets/images/Arrows/moreArrow.png"
import less from "../../assets/images/Arrows/lessArrow.png"
import reaction_dark from '../../assets/images/common/reaction-dark.png'
import reaction_red from '../../assets/images/common/reaction-red.png'
import view from '../../assets/images/common/eye-dark.png'
import send from '../../assets/images/common/send.png'
import { toggleReaction } from "../../redux/slice/BlogSlice"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../redux/store"

interface FM_BlogContent {
    blogId?: string,
    reactions?: number,
    views?: number,
    shares?: number,
    introTitle?: string,
    introDesc?: string,
    date?: string,
    readerTime?: string,
    author?: string,
    category?: string,
    isReact?: boolean,
    subTitles?: FM_BlogContentSubTitles[],
}

interface FM_BlogContentSubTitles {
    subTitle?: string,
    desc?: string,
}

export default function FM_BlogContent({ blogId, introTitle, introDesc, subTitles, isReact, reactions, views, shares, date, readerTime, author, category }: FM_BlogContent) {

    const [showAll, setShowAll] = useState(false)
    const labels = ['Publication Date', 'Category', 'Reading Time', 'Author Name']
    const values = [date, category, readerTime, author]
    const imgs = [view, send]
    const spans = [views, shares]
    const blog = useSelector((state: RootState) => state.newsBlog.blogs).find((b => b.id === blogId))

    const dispatch = useDispatch()

    useEffect(() => {
        if (blog) {
            dispatch(toggleReaction(blogId))
        }
    }, [dispatch])

    return (
        <section className='flex lg:flex-wrap flex-wrap-reverse items-start bg-myprimary-dark-08 border-y border-myprimary-dark-20'>
            <div className="w-full lg:w-[64.48%] lg:border-r lg:border-myprimary-dark-20">
                <div className="2xl:ps-mainpaddinglarge 2xl:pe-[80px] xl:ps-[80px] xl:pe-[60px] px-4 border-b border-myprimary-dark-20 py-10 md:py-[60px] 2xl:py-[80px]">
                    <h4 className="text-lg md:text-xl font-medium font-inter text-white mb-1.5 2xl:mb-3.5">{introTitle}</h4>
                    <p className="font-inter text-[13.5px] md:text-base 2xl:text-lg text-myprimary-gray-60">{introDesc}</p>
                </div>
                <div className={`transition-all duration-600 ease-in-out overflow-hidden relative 2xl:ps-mainpaddinglarge 2xl:pe-[80px] xl:ps-[80px] xl:pe-[60px] px-4 py-10 md:py-[60px] 2xl:py-[80px] flex flex-col items-center ${showAll ? 'h-max' : '2xl:h-[741px] xl:h-[870px] h-[908px]'}`}>
                    {subTitles?.map((e, index) => {
                        return (
                            <div key={index} className="mb-6 xl:mb-[30px]">
                                <h3 className="text-lg xl:text-[22px] 2xl:text-[28px] font-medium font-inter text-white mb-3.5 2xl:mb-6 xl:mb-5">{e.subTitle}</h3>
                                <p className="font-inter text-[13.5px] md:text-[15px] 2xl:text-[17px] font-normal text-myprimary-gray-60">{e.desc}</p>
                            </div>
                        )
                    })}
                    <div className={`${showAll ? 'hidden' : 'absolute w-full left-0 h-[215px] bottom-0 !bg-FM-linear-gradient'}`}></div>
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className={`${showAll ? '' : 'absolute w-max bottom-[8%] z-10'} font-inter py-3.5 px-5 2xl:px-6 border rounded-xl border-neutral-800 text-sm 2xl:text-[17px] text-myprimary-gray-60 flex justify-center items-center gap-1`}>
                        {showAll ? 'Read Less' : 'Read Full Blog'}
                        <img src={showAll ? less : more} alt="arrow" />
                    </button>
                </div>
            </div>
            <div className="w-full lg:w-[35.52%]">
                <div className="2xl:pe-mainpaddinglarge 2xl:ps-[80px] xl:pe-[80px] xl:ps-[60px] px-4 border-b border-myprimary-dark-20 py-5 xl:py-10 2xl:py-[50px] gap-3.5 flex max-1200:flex-wrap lg:justify-start justify-center">
                    <button
                        onClick={() => dispatch(toggleReaction(blogId))}
                        className="h-[54px] w-[92px] 2xl:w-[130px] bg-myprimary-dark-10 text-myprimary-gray-60 px-4 !py-[9.5px] justify-center items-center text-lg flex gap-1 !border !border-myprimary-dark-20 rounded-full">
                        <img src={isReact ? reaction_red : reaction_dark} className="w-[32px]" alt="reaction-dark" />
                        <span>{reactions}</span>
                    </button>
                    {
                        Array.from({ length: 2 }).map((_, index) => {
                            return (
                                <button key={index}
                                    className="w-[85px] 2xl:w-[116px] bg-myprimary-dark-10 text-myprimary-gray-60 px-4 !py-[9.5px] justify-center items-center text-lg flex gap-1 !border !border-myprimary-dark-20 rounded-full">
                                    <img src={imgs[index]} className="w-[32px]" alt='img' />
                                    <span>{spans[index]}</span>
                                </button>
                            )
                        })
                    }
                </div>
                <div className="2xl:pe-mainpaddinglarge 2xl:ps-[80px] xl:pe-[80px] xl:ps-[60px] px-4 py-10 md:py-[60px] 2xl:py-[80px]">
                    <div className="grid grid-cols-2 gap-5 2xl:gap-[30px] mb-5 xl:mb-10 2xl:mb-[50px]">
                        {
                            Array.from({ length: 4 }).map((_, index) => {
                                return (
                                    <div key={index} className="mb-4 last:mb-0">
                                        <h3 className="text-sm md:text-base 2xl:text-lg font-normal font-inter text-myprimary-gray-60">{labels[index]}</h3>
                                        <p className="font-inter text-sm md:text-base 2xl:text-lg font-medium text-white">{values[index]}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div>
                        <h3 className="text-sm md:text-base 2xl:text-lg font-normal font-inter text-myprimary-gray-60 mb-3.5">Table of Contents</h3>
                        <ul className="lg:w-full list-disc p-4.5 !ps-9 2xl:p-5 2xl:!ps-10 rounded-[10px] bg-myprimary-dark-10 flex flex-col gap-5">
                            <li className="font-inter text-sm md:text-base 2xl:text-lg font-medium text-white">Introduction</li>
                            {subTitles?.map((e, index) => {
                                return (
                                    <li key={index} className="font-inter text-sm md:text-base 2xl:text-lg font-medium text-white">{e.subTitle}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}