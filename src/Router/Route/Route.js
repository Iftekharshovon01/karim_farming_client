import Main from "../../Layout/Main";
import Home from "../../Pages/HomePage/Home/Home"
import Services from "../../Pages/HomePage/Seervices/Services";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Faq from '../../Pages/Blog/Faq'
import Blog from '../../Pages/Blog/Blog'

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])

export default router;