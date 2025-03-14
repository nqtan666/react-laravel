import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosClient from '../axios-client';
import { LOGIN } from '../constants/api';
import { useGlobalContext } from '../contexts/ContextProvider';

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [errors, setErrors] = useState();
    const { setUser, setToken } = useGlobalContext();

    const onSubmit = (e) => {
        e.preventDefault();
        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };
        axiosClient
            .post(LOGIN, payload)
            .then(({ data }) => {
                setUser(data.user);
                setToken(data.token);
            })
            .catch((error) => {
                const { response } = error;
                if (response.data.errors) {
                    setErrors(response.data.errors);
                } else {
                    setErrors({ email: response.data.message });
                }
            });
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-lg" style={{ width: '350px' }}>
                <h2 className="mb-3 text-center">Login</h2>

                {errors && (
                    <div className="alert alert-danger">
                        {Object.values(errors).map((error, index) => (
                            <p key={index} className="mb-1">
                                {error}
                            </p>
                        ))}
                    </div>
                )}

                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email Address
                        </label>
                        <input ref={emailRef} type="email" id="email" className="form-control" placeholder="Enter your email" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input ref={passwordRef} type="password" id="password" className="form-control" placeholder="Enter your password" />
                    </div>

                    <button className="btn btn-primary w-100" type="submit">
                        Login
                    </button>
                </form>

                <p className="mt-3 text-center">
                    Not registered? <Link to="/signup">Create an account</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
