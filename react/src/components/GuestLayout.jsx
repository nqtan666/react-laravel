import { Navigate, Outlet } from 'react-router-dom';
import { useGlobalContext } from '../contexts/ContextProvider';

export default function GuestLayout() {
    const { token } = useGlobalContext();
    console.log('token', token);
    if (token) {
        return <Navigate to="/users" />;
    }
    return (
        <div>
            <Outlet />
        </div>
    );
}
