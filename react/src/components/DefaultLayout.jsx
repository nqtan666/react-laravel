import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import axiosClient from '../axios-client';
import { LOGOUT, USER } from '../constants/api';
import { useGlobalContext } from '../contexts/ContextProvider';
import Header from './default/Header';
import Sidebar from './default/Sidebar';

export default function DefaultLayout() {
    const { user, token, setToken, setUser } = useGlobalContext();
    if (!token) {
        return <Navigate to="/admin/login" />;
    }
    useEffect(() => {
        axiosClient.get(USER).then(({ data }) => {
            setUser(data);
        });
    }, []);
    const onLogout = (ev) => {
        ev.preventDefault();
        axiosClient.post(LOGOUT).then(() => {
            setToken(null);
            setUser(null);
        });
    };
    return (
        <div id="defaultLayout">
            <Sidebar />
            <div className="content">
                <Header user={user} onLogout={onLogout} />
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
