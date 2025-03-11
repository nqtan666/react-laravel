import { Link, Navigate, Outlet } from 'react-router-dom';
import { useGlobalContext } from '../contexts/ContextProvider';

export default function DefaultLayout() {
    const { user, token, setToken, setUser } = useGlobalContext();
    if (!token) {
        console.log('Redirect to login');
        return <Navigate to="/login" />;
    }
    const onLogout = (ev) => {
        ev.preventDefault();
        setToken(null);
        setUser(null);
    };
    return (
        <div id="defaultLayout">
            <aside>
                <Link to={'/dashboard'}>Dashboard</Link>
                <Link to={'/users'}>Users</Link>
            </aside>
            <div className="content">
                <header>
                    <div>Header</div>
                    <div>
                        {user.name}
                        <a href="#" onClick={onLogout} className="btn-logout">
                            Logout
                        </a>
                    </div>
                </header>
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
