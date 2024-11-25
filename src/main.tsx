import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NewsPage from './pages/NewsPage'
import BlogOpenPage from './pages/BlogOpenPage'
import PodcastsPage from './pages/PodcastsPage'
import ResourcesPage from './pages/ResourcesPage'
import ContactPage from './pages/ContactPage'

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "/news",
    element: <NewsPage/>
  },
  {
    path: "/blog",
    element: <BlogOpenPage/>
  },
  {
    path: "/podcasts",
    element: <PodcastsPage/>
  },
  {
    path: "/resources",
    element: <ResourcesPage/>
  },
  {
    path: "/contact",
    element: <ContactPage/>
  },
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)
