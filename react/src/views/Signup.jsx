import { useRef } from 'react';
import { Link } from 'react-router-dom';
import axiosClient from '../axios-client';
import { useGlobalContext } from '../contexts/ContextProvider';

const Signup = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { setUser, setToken } = useGlobalContext();
    const onSubmit = (e) => {
        e.preventDefault();
        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirm: passwordConfirmRef.current.value,
        };
        axiosClient
            .post('/signup', payload)
            .then(({ data }) => {
                setUser(data.user);
                setToken(data.token);
            })
            .catch((error) => {
                const { response } = error;
                if (response.status === 422) {
                    console.log(response.data.errors);
                }
            });
    };
    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title">Signup for free</h1>

                    <input ref={nameRef} type="text" name="name" placeholder="Full Name" />
                    <input ref={emailRef} type="email" name="email" placeholder="Email" />
                    <input ref={passwordRef} type="password" name="password" placeholder="Password" />
                    <input ref={passwordConfirmRef} type="password" name="password_confirm" placeholder="Password Confirmation" />
                    <button className="btn btn-block" type="submit">
                        Signup
                    </button>
                    <p className="message">
                        Already Registered? <Link to="/login">Sign in</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};
export default Signup;
