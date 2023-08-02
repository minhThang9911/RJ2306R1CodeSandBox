import {RouterProvider,  createBrowserRouter } from "react-router-dom"
import Main from "./modules/Main"
import Users from "./modules/Users"
import Posts from "./modules/Posts"
import Comments from './modules/Comments'
import './App.css'

const router = createBrowserRouter([
  {
      path:'/',
      element: <Main/>
  },
  {
    path:'/users',
    element:<Users/>
  },
  {
    path:'/posts',
    element:<Posts/>
  },
  {
    path:'/comments',
    element:<Comments/>
  },
])


export default function App() {  
  return <RouterProvider router={router}/>    
}