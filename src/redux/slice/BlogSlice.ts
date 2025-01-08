import { createSlice } from '@reduxjs/toolkit'
import { Blogs, BlogsData } from '../../Data/BlogsData'

const initialState = {
    blogs: BlogsData as Blogs[],
    filteredBlogs: [] as Blogs[],
    last4Blogs: [] as Blogs[],
    similerblogs: [] as Blogs[],
}

const blogSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
        filterByCategory: (state, action) => {
            const category = action.payload
            if (category === 'All') {
                state.filteredBlogs = [...state.blogs]
            } else {
                state.filteredBlogs = state.blogs.filter(
                    (blog) => blog.category.toLowerCase().includes(category.toLowerCase())
                )
            }
        },
        toggleReaction: (state, action) => {
            const blogId = action.payload
            const blogIndex = state.blogs.findIndex(e => e.id === blogId)
            if (blogIndex !== -1) {
                if (state.blogs[blogIndex].isReact == false) {
                    state.blogs[blogIndex].reactions += 1
                    state.blogs[blogIndex].isReact = true
                }
                else {
                    state.blogs[blogIndex].reactions -= 1
                    state.blogs[blogIndex].isReact = false
                }
            }
        },
        last4blogs: (state) => {
            state.last4Blogs = state.blogs.slice(-4).reverse()
        },
        similerblogs: (state, action) => {
            const { index, category} = action.payload
            state.filteredBlogs = state.blogs.filter(
                (blog) => 
                    blog.id !== index &&
                    blog.category.toLowerCase().includes(category.toLowerCase())
            )
            state.similerblogs = state.filteredBlogs.slice(0,3)
        },
    }
})

export const BlogsReducer = blogSlice.reducer
export const { filterByCategory, last4blogs, toggleReaction, similerblogs } = blogSlice.actions