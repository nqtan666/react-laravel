import 'antd/dist/reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Fragment } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ContextProvider } from './contexts/ContextProvider.jsx';
import './index.css';
import router from './router.jsx';
createRoot(document.getElementById('root')).render(
    <>
        <Fragment>
            <ContextProvider>
                <RouterProvider router={router} />;
            </ContextProvider>
        </Fragment>
    </>,
);
