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
        <div>
            <form
                onSubmit={handleSignUp}>
                <div className="text-center">
                    <img
                        src="https://i.ibb.co/n1bKcX7/favicon.png"
                        className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                        width="200px"
                        alt="profile"
                    />
                </div>

                <div className="mb-3 user-input">
                    <input
                        type="text"
                        name="text"
                        className="form-control"
                        id="Username"
                        aria-describedby="emailHelp"
                        placeholder="Enter Name"
                    />
                </div>
                <div className="mb-3 user-input">
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="Username"
                        aria-describedby="emailHelp"
                        placeholder="Enter Email"
                    />
                </div>
                <div className="mb-3 pwd-container user-input">
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
                    <button type="submit" className="btn btn-color signup-btn px-5">
                        SIGN UP
                    </button>
                </div>
                <div className="text-center mt-4 mb-5 d-flex justify-content-center align-items-center">
                    <div className="signup">
                        <p>Already have an account?</p>
                        <Link to="/login">PLEASE SIGNIN</Link>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;