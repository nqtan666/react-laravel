import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <aside
            className="d-flex flex-column vh-100 p-3 text-white"
            style={{
                width: '250px',
                background: 'linear-gradient(135deg, #1e3c72, #2a5298, #764ba2)',
            }}
        >
            <h4 className="mb-4 text-center">Admin Panel</h4>
            <hr></hr>
            <nav className="nav flex-column">
                <SidebarLink to="/admin/dashboard" text="Dashboard" />
                <SidebarLink to="/admin/users" text="Users" />
                <SidebarLink to="/admin/categories" text="Categories" />
            </nav>
        </aside>
    );
}
const SidebarLink = ({ to, text }) => (
    <Link
        to={to}
        className="nav-link d-flex align-items-center rounded p-2"
        style={{
            textDecoration: 'none',
            color: 'white',
            fontWeight: 'bold',
            transition: '0.3s',
        }}
        onMouseEnter={(e) => (e.target.style.color = '#ffeb3b')}
        onMouseLeave={(e) => (e.target.style.color = 'white')}
    >
        {text}
    </Link>
);
