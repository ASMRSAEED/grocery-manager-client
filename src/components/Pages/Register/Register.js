import React, { useState } from "react";
import "./Register.css";
import showPwdImg from "./show-password.svg";
import hidePwdImg from "./hide-password.svg";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../Firebase/firebase.init"
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import Loading from "../../Shared Pages/Loading/Loading";

const Register = () => {
    const [pwd, setPwd] = useState("");
    const [isRevealPwd, setIsRevealPwd] = useState(false);
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    if (loading || updating) {
        return <Loading></Loading>
    }

    const handleSignUp = async (event) => {
        event.preventDefault();

        const name = event.target.text.value;
        const email = event.target.email.value;
        const password = event.target.pwd.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    };

    if (user) {
        navigate("/");
    }


    return (
        <div className="container main-container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card mb-5">
                        <form
                            onSubmit={handleSignUp}
                            className="card-body cardbody-color p-lg-5"
                        >
                            <div className="text-center">
                                <img
                                    src="https://i.ibb.co/n1bKcX7/favicon.png"
                                    className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                                    width="200px"
                                    alt="profile"
                                />
                            </div>

                            <div className="mb-3">
                                <input
                                    type="text"
                                    name="text"
                                    className="form-control"
                                    id="Username"
                                    aria-describedby="emailHelp"
                                    placeholder="User Name"
                                />
                            </div>
                            <div className="mb-3 enter-email">
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    id="Username"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter Email"
                                />
                            </div>
                            <div className="mb-3 pwd-container w-100">
                                <input
                                    style={{ width: "100%" }}
                                    className="form-control"
                                    id="password"
                                    name="pwd"
                                    placeholder="Enter Password"
                                    type={isRevealPwd ? "text" : "password"}
                                    value={pwd}
                                    onChange={(e) => setPwd(e.target.value)}
                                />
                                <img
                                    title={isRevealPwd ? "Hide password" : "Show password"}
                                    src={isRevealPwd ? hidePwdImg : showPwdImg}
                                    onClick={() => setIsRevealPwd((prevState) => !prevState)} alt=""
                                />
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-color signup-btn px-5  w-100">
                                    SIGN UP
                                </button>
                            </div>
                            <div className="text-center mt-2 m-0 mb-5 p-0 d-flex justify-content-center align-items-center">
                                <div className="signup">
                                    <p>Already have an account?<Link to="/login">PLEASE LOGIN</Link></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;