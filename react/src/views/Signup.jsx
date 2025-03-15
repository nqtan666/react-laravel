import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosClient from '../axios-client';
import { SIGNUP } from '../constants/api';
import { useGlobalContext } from '../contexts/ContextProvider';
import ReCAPTCHA from "react-google-recaptcha";
const Signup = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const [errors, setErrors] = useState();
    const { setUser, setToken } = useGlobalContext();
    const [recaptchaToken, setRecaptchaToken] = useState(null);

    const onSubmit = (e) => {
        e.preventDefault();
        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirm: passwordConfirmRef.current.value,
            recaptcha_token: recaptchaToken,
        };
        axiosClient
            .post(SIGNUP, payload)
            .then(({ data }) => {
                setUser(data.user);
                setToken(data.token);
                window.location.href = '/admin';
            })
            .catch((error) => {
                const { response } = error;
                if (response.status === 422) {
                    setErrors(response.data.errors);
                }
            });
    };

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100 container">
            <div className="card p-4 shadow-lg" style={{ maxWidth: '400px', width: '100%' }}>
                <h2 className="mb-4 text-center">Signup for free</h2>
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
                        <label className="form-label">Full Name</label>
                        <input ref={nameRef} type="text" className="form-control" placeholder="Enter your name" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input ref={emailRef} type="email" className="form-control" placeholder="Enter your email" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input ref={passwordRef} type="password" className="form-control" placeholder="Enter password" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Confirm Password</label>
                        <input ref={passwordConfirmRef} type="password" className="form-control" placeholder="Confirm password" required />
                    </div>
                    <ReCAPTCHA className='mb-3 form-control' sitekey="6LfuXPUqAAAAAN1QT90Ti0vN1BwwBA30VFQsdLuw" onChange={setRecaptchaToken} />
                    <button className="btn btn-primary w-100" type="submit">
                        Signup
                    </button>
                </form>
                <p className="mt-3 text-center">
                    Already registered? <Link to="/admin/login">Sign in</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
