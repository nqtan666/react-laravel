import { Link } from 'react-router-dom';

const Login = () => {
    const onSubmit = (e) => {};
    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title">Login</h1>

                    <input type="email" id="email" placeholder="Email" />

                    <input type="password" id="password" placeholder="Password" />

                    <button className="btn btn-block" type="submit">
                        Login
                    </button>
                    <p className="message">
                        Not registered? <Link to="/signup">Create an account</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
