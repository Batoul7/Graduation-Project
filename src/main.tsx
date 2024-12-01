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
import { Provider } from 'react-redux'
import store from './redux/store'
import App from './App'

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <HomePage/>,
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
    ]
  },
  
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <Provider store={store}>
     <RouterProvider router={routes}/>
     </Provider>
  </StrictMode>,
)
