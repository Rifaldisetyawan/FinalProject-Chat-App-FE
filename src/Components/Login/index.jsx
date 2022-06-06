import React, { useState, useEffect } from "react";
import {axiosInstance} from "../../config";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../../logo2.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginRoute } from "../../Utils/APIRoutes";
import '../Login/Login.css'
import {IoEyeSharp} from 'react-icons/io5'

const Login = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
      setPasswordShown(!passwordShown);
    };
    const navigate = useNavigate();
    const [values, setValues] = useState({ username: "", password: "" });
    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    };
    useEffect(() => {
        
        if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
            navigate("/");
        }
        // eslint-disable-next-line
    }, []);

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const validateForm = () => {
        const { username, password } = values;
        if (username === "") {
            toast.error("Email and Password is required.", toastOptions);
            return false;
        } else if (password === "") {
            toast.error("Email and Password is required.", toastOptions);
            return false;
        }
        return true;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validateForm()) {
            const { username, password } = values;
            const { data } = await axiosInstance.post(loginRoute, {
                username,
                password,
            });
            if (data.status === false) {
                toast.error(data.msg, toastOptions);
            }
            if (data.status === true) {
                localStorage.setItem(
                    process.env.REACT_APP_LOCALHOST_KEY,
                    JSON.stringify(data.user)
                );

                navigate("/");
            }
        }
    };

    return (
        <>
            <FormContainer className="form-container">
                <div className="container-page">
                    <form action="" onSubmit={(event) => handleSubmit(event)} className='form-login'>
                        <div className="brand">
                            <img src={Logo} alt="logo" />
                        </div>
                        <input
                            type="text"
                            placeholder="Username"
                            name="username"
                            onChange={(event) => handleChange(event)}
                            min="3"
                            className="input-login"
                        />
                        <div className="input-password">
                        <input
                            type={passwordShown ? "text" : "password"}
                            placeholder="Password"
                            name="password"
                            onChange={(event) => handleChange(event)}
                            className="input-register-password"
                        /><IoEyeSharp onClick={togglePassword} className="showPassword"/>
                        </div>
                        
                        <button type="submit" className="button-login">Log In</button>
                        <span>
                            Don't have an account ? <Link to="/register">Create One.</Link>
                        </span>
                    </form>
                    <div className='footer'>@YNTKTS Tech</div>
                </div>
            </FormContainer>
            <ToastContainer/>
        </>
    );
}

export default Login


const FormContainer = styled.div``;
