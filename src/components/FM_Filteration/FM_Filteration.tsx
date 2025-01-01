import { useEffect, useState } from "react";
import { BtnsType  } from "../../Data/BtnsFilterData";
import ButtonCommon from "../ButtonCommon/ButtonCommon";
import FM_FilterCard from "../FM_FilterCard/FM_FilterCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { filterByCategory } from "../../redux/slice/BlogSlice";
import FM_Handel from "../FM_Handel/FM_Handel";

export default function FM_Filteration({btns} : any) {

    const blogs = useSelector((state: RootState) => state.newsBlog.filteredBlogs);

    const [active, setActive] = useState("All")

    function handleActive(isActive: string) {
        setActive(isActive)
        dispatch(filterByCategory(isActive))
    }

    const dispatch = useDispatch()

    useEffect(() => {
        if (blogs) {
            dispatch(filterByCategory(active))
        }
    }, [dispatch])

    return (
        <section className="bg-myprimary-dark-08 overflow-hidden">
            <div className="2xl:px-mainpaddinglarge xl:px-[80px] px-4 flex max-1200:flex-wrap max-1200:justify-evenly gap-[14px] 2xl:gap-5 py-5 md:py-10 2xl:py-[50px] border-y border-myprimary-dark-20">
                {btns.map((e : BtnsType , index : number) => {
                    return (
                        <ButtonCommon
                            key={index}
                            func={() => handleActive(e.txt)}
                            filterBtnActive={active == e.txt ? 'filterBtnActive' : ''}
                            filterBtn={active == e.txt ? '' : 'filterBtn'}
                            contentBtn={e.txt} hiddenArrow='hiddenArrow' hiddenEyes='hiddenEyes'
                        />
                    )
                })}
            </div>
            {blogs.length > 0 ? (
                blogs.map((e, index) => (
                    <FM_FilterCard key={index} link="" blogId={e.id} />
                ))
            ) : <FM_Handel />
            }


        </section>
    )
}