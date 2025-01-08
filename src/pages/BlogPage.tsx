import { RootState } from "../redux/store"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import FM_BlogHero from "../components/FM_BlogHero/FM_BlogHero"
import FM_BlogContent from "../components/FM_BlogContent/FM_BlogContent"
import { similerblogs } from "../redux/slice/BlogSlice"
import FM_SimilerBlogs from "../components/FM_SimilerBlogs/FM_SimilerBlogs"

export default function BlogPage() {

    const { id } = useParams()

    const blog = useSelector((state: RootState) => state.newsBlog.blogs).find((b => b.id === id?.replace(/:\id/, '')))
    const similerblog = useSelector((state: RootState) => state.newsBlog.similerblogs)

    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [])

    useEffect(() => {
        if (blog) {
            dispatch(similerblogs(
                {
                    index: blog.id,
                    category: blog.category
                }
            ))
        }
    }, [dispatch])

    return (
        <>
            <FM_BlogHero title={blog?.title} img={blog?.cover}/>
            <FM_BlogContent 
                blogId={blog?.id}
                introTitle={blog?.intro} 
                introDesc={blog?.introDesc} 
                subTitles={blog?.SubTit} 
                isReact={blog?.isReact}
                reactions={blog?.reactions}
                views={blog?.views}
                shares={blog?.shares}
                date={blog?.date} 
                readerTime={blog?.readerTime}
                author={blog?.author}
                category={blog?.category}
            />
            <FM_SimilerBlogs blogId={blog?.id} data={similerblog}/>
        </>
    )
}

