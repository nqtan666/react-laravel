import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosClient from '../axios-client';
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
            .post('/login', payload)
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
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title">Login</h1>
                    {errors && (
                        <div className="alert alert-danger">
                            {Object.values(errors).map((error) => (
                                <p key={error}>{error}</p>
                            ))}
                        </div>
                    )}
                    <input ref={emailRef} type="email" id="email" placeholder="Email" />

                    <input ref={passwordRef} type="password" id="password" placeholder="Password" />

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
