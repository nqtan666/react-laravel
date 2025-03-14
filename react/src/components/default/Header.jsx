import { useState } from 'react';

const Header = ({ user, onLogout }) => {
    const handleLogout = (ev) => {
        onLogout(ev);
    };
    const [showDropdown, setShowDropdown] = useState(false);
    return (
        <header className="navbar navbar-expand-lg px-3" style={{ backgroundColor: 'rgb(142, 174, 221)' }}>
            <div className="container-fluid">
                <span className="navbar-brand fw-bold text-white"></span>
                <div className="d-flex align-items-center">
                    <span className="me-3 text-white">Wellcome, {user.name}</span>
                    <div className="position-relative" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
                        <img
                            src={`https://ui-avatars.com/api/?name=${user.name}&background=random&color=fff`}
                            alt="User Avatar"
                            className="rounded-circle me-2"
                            width="40"
                            height="40"
                            style={{ cursor: 'pointer' }}
                        />

                        {showDropdown && (
                            <ul className="dropdown-menu dropdown-menu-end show position-absolute" style={{ right: 0, top: '100%' }}>
                                <li>
                                    <a className="dropdown-item" href="/profile">
                                        Profile
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/settings">
                                        Settings
                                    </a>
                                </li>
                                <li>
                                    <button className="dropdown-item" onClick={handleLogout}>
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
