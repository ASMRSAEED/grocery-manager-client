import "./Login.css";
import {
    useSignInWithEmailAndPassword,
    useSignInWithFacebook,
    useSignInWithGithub,
    useSignInWithGoogle
} from "react-firebase-hooks/auth";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import showPwdImg from "./show-password.svg";
import hidePwdImg from "./hide-password.svg";

import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../Firebase/firebase.init"
import { useState } from "react";
import Loading from "../../Shared Pages/Loading/Loading";

const Login = () => {
    const [email, setEmail] = useState("");

    const [pwd, setPwd] = useState("");
    const [isRevealPwd, setIsRevealPwd] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from.pathname || "/";

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    console.log(email);

    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);
    console.log(error)
    const [signInWithGoogle, googleUser, googleLoading, googleError] =
        useSignInWithGoogle(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] =
        useSignInWithFacebook(auth);
    const [signInWithGithub, gihubUser, githubLoading, githubError] =
        useSignInWithGithub(auth);
    const [sendPasswordResetEmail, sending, forgotError] =
        useSendPasswordResetEmail(auth);


    const handleSignIn = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.pwd.value;
        signInWithEmailAndPassword(email, password);
    };

    if (user || googleUser || facebookUser || gihubUser) {
        navigate(from, { replace: true });
    }

    if (loading || googleLoading || facebookLoading || githubLoading) {
        return <Loading></Loading>
    }
    let errorElement;
    if (error || googleError || facebookError || githubError || forgotError) {
        errorElement = <p className='text-danger'>Error: {error?.message} {googleError?.message}  {facebookError?.message}  {githubError?.message}  {forgotError?.message}</p>

    }

    return (
        <div className="container main-container  ">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card  mb-5">
                        <form
                            onSubmit={handleSignIn}
                            className="card-body cardbody-color p-lg-5 "
                        >
                            <div className="text-center">
                                <img
                                    src="https://i.ibb.co/n1bKcX7/favicon.png"
                                    className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                                    width="200px"
                                    alt="profile"
                                />
                            </div>

                            <div className="mb-3 ">
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleEmail}
                                    className="form-control"
                                    id="Username"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter Email"
                                    required
                                />
                            </div>
                            <div className="mb-3 pwd-container w-100 snd-container password-eye">
                                <input
                                    style={{ width: "100%" }}
                                    className="form-control"
                                    id="password"
                                    name="pwd"
                                    placeholder="Enter Password"
                                    type={isRevealPwd ? "text" : "password"}
                                    value={pwd}
                                    required
                                    onChange={(e) => setPwd(e.target.value)}
                                />
                                <img
                                    title={isRevealPwd ? "Hide password" : "Show password"}
                                    src={isRevealPwd ? hidePwdImg : showPwdImg}
                                    onClick={() => setIsRevealPwd((prevState) => !prevState)}
                                />
                            </div>

                            {
                                errorElement
                            }
                            <div className="text-center">
                                <button type="submit" className="submit-button btn btn-color px-5  w-100">
                                    SIGN IN
                                </button>
                            </div>
                            <div className="text-center mb-4 m-0 p-0 ">
                                {" "}
                                <button
                                    className="btn "
                                    onClick={async () => {
                                        if (email) {
                                            await sendPasswordResetEmail(email);
                                            toast("Verification Email Sent");
                                        }
                                        else {
                                            toast("Please Enter Email Address")
                                        }
                                    }}
                                >
                                    <a className="anchor forgot-pass" href="#g">
                                        Forgot Password?
                                    </a>
                                </button>{" "}
                                <div className="signup"><br />
                                    <p>New to Grocery Manager? <br />
                                        <Link to="/register">Create a new account</Link></p>
                                </div>
                            </div>
                            <div className="divider">
                                <div className="divider_line"></div><p><b>or</b></p>
                                <div className="divider_line"></div>
                            </div>
                            <div className="social-site-logIn social-login-1">
                                <button
                                    className="btn btn-success w-80 mt-3 px-5"
                                    onClick={() => signInWithGoogle()}
                                >
                                    <img
                                        style={{ width: "50px", height: "50px" }}
                                        src="https://i.ibb.co/5hPkzLZ/google.png"
                                        alt=""
                                    />
                                    <b> SIGN IN WITH GOOGLE</b>
                                </button><br />
                                <button
                                    onClick={() => signInWithFacebook()}
                                    className="btn btn-success w-80 mt-3 px-3"
                                >
                                    <img
                                        style={{ width: "60px", height: "50px" }}
                                        src="https://i.ibb.co/0YSCdX2/facebook.png"
                                        alt=""
                                    />
                                    <b>SIGN IN WITH FACEBOOK</b>
                                </button><br />
                                <button onClick={() => signInWithGithub()} className="btn btn-success w-80 mt-3">

                                    <img
                                        style={{ width: "60px", height: "50px" }}
                                        src="https://i.ibb.co/TLspGGt/images.png"
                                        alt=""
                                    />
                                    <b>SIGN IN WITH GITHUB</b>
                                </button>

                                <ToastContainer />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;