import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from './components/DefaultLayout';
import GuestLayout from './components/GuestLayout';
import Dashboard from './views/Dashboard';
import Login from './views/Login';
import News from './views/News/News';
import Signup from './views/Signup';
import User from './views/User';
import Category from './views/category/Category';
const router = createBrowserRouter([
    {
        path: '/*',
        element: <News />,
    },
    {
        path: '/admin',
        element: <DefaultLayout />,
        children: [
            {
                path: '/admin',
                element: <Dashboard />,
            },
            {
                path: '/admin/users',
                element: <User />,
            },
            {
                path: '/admin/dashboard',
                element: <Dashboard />,
            },
            {
                path: '/admin/categories',
                element: <Category />,
            },
        ],
    },
    {
        path: '/admin',
        element: <GuestLayout />,
        children: [
            {
                path: '/admin/login',
                element: <Login />,
            },
            {
                path: '/admin/signup',
                element: <Signup />,
            },
        ],
    },
]);

export default router;
