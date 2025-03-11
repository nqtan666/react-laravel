import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from './components/DefaultLayout';
import GuestLayout from './components/GuestLayout';
import Dashboard from './views/Dasbboard';
import Login from './views/Login';
import NotFound from './views/Notfound';
import Signup from './views/Signup';
import User from './views/User';
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
