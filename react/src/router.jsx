import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from './components/DefaultLayout';
import GuestLayout from './components/GuestLayout';
import Dashboard from './views/Dashboard';
import Login from './views/Login';
import NotFound from './views/Notfound';
import Signup from './views/Signup';
import User from './views/User';
import Category from './views/category/Category';
const router = createBrowserRouter([
    {
        path: '/*',
        element: <NotFound />,
    },
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <User />,
            },
            {
                path: '/users',
                element: <User />,
            },
            {
                path: '/dashboard',
                element: <Dashboard />,
            },
            {
                path: '/categories',
                element: <Category />,
            },
        ],
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/signup',
                element: <Signup />,
            },
        ],
    },
]);

export default router;
