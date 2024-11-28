import { createSlice } from '@reduxjs/toolkit'
import { BlogsData } from '../../Data/BlogsData'

interface Blogs {
    id: number,
    cover: string,
    title: string,
    desc: string,
    category: string,
    author: string,
    readerIMG: string,
    readerName: string,
    readingTime: string,
    reactions: number,
    comments: number,
    shares: number,
    views: number,
    date: string
}

const initialState = {
    blogs: BlogsData as Blogs[],
    filteredBlogs: [] as Blogs[],
    last4Blogs: [] as Blogs[],
}

const blogSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
        addBlog: (state, action) => {
            const newBlog: Blogs = action.payload
            state.blogs.push(newBlog)
            state.filteredBlogs.push(newBlog)
        },
        removeBlog: (state, action) => {
            const blogId = action.payload
            const index = state.blogs.findIndex(blog => blog.id === blogId)
            if (index !== -1) {
                state.blogs.splice(index, 1)
                state.filteredBlogs.splice(index, 1)
            }
        },
        filterByCategory: (state, action) => {
            const category = action.payload
            state.filteredBlogs = state.blogs.filter(e => e.category.toLowerCase() === category.toLowerCase())
        },
        filterByAuthor: (state, action) => {
            const author = action.payload
            state.filteredBlogs = state.blogs.filter(e => e.author.toLowerCase() === author.toLowerCase())
        },
        toggleReaction: (state, action) => {
            const { blogId } = action.payload
            const blogIndex = state.blogs.findIndex(e => e.id === blogId)
            if (blogIndex !== -1) {
                state.blogs[blogIndex].reactions += 1
            }
        },
        last4blogs: (state) => {
            state.last4Blogs = state.blogs.slice(-4).reverse();
        },
    }
})

export const BlogsReducer = blogSlice.reducer
export const { addBlog, removeBlog, filterByCategory, filterByAuthor } = blogSlice.actions