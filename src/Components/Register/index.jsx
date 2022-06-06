import React, { useState, useEffect } from "react";
import axiosInstance from "../../config";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../../logo2.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerRoute } from "../../Utils/APIRoutes";
import '../Register/Register.css'
import {IoEyeSharp} from 'react-icons/io5'
import swal from "sweetalert";


const Register = () => {
  const navigate = useNavigate();
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  useEffect(() => {
    if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      navigate("/");// eslint-disable-next-line
    }
    // eslint-disable-next-line
  }, []);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleValidation = () => {
    const { password, confirmPassword, username, email } = values;
    if (password !== confirmPassword) {
      toast.error(
        "Password and confirm password should be same.",
        toastOptions
      );
      return false;
    } else if (username.length < 3) {
      toast.error(
        "Username should be greater than 3 characters.",
        toastOptions
      );
      return false;
    } else if (password.length < 8) {
      toast.error(
        "Password should be equal or greater than 8 characters.",
        toastOptions
      );
      return false;
    } else if (email === "") {
      toast.error("Email is required.", toastOptions);
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const { email, username, password } = values;
      const { data } = await axiosInstance.post(registerRoute, {
        username,
        email,
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
        swal({
          title: "Success",
          text: "Account created",
          icon: "success",
          button:false,
          timer:800
        });
        setTimeout(function(){
          navigate("/");
       }, 900);
      }
    }
  };

  return (
    <>
      <FormContainer className="form-container">
        <div className="container-page">
          <form action="" onSubmit={(event) => handleSubmit(event)} className="form-register">
            <div className="brand">
              <img src={Logo} alt="logo" />
            </div>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={(e) => handleChange(e)}
              className="input-register"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={(e) => handleChange(e)}
              className="input-register"
            />
            <div className="input-password">
              <input
              type={passwordShown ? "text" : "password"}
              placeholder="Password"
              name="password"
              onChange={(e) => handleChange(e)}
              className="input-register-password"
             
            /><IoEyeSharp onClick={togglePassword} className="showPassword"/>
            </div>
            <div className="input-password">
            <input
              type={passwordShown ? "text" : "password"}
              placeholder="Confirm Password"
              name="confirmPassword"
              onChange={(e) => handleChange(e)}
              className="input-register-password"
            /><IoEyeSharp onClick={togglePassword} className="showPassword"/>
            </div>
            
            <button type="submit" className="button-register">Create User</button>
            <span>
              Already have an account ? <Link to="/login">Login.</Link>
            </span>
          </form>
          <div className='footer'>@YNTKTS Tech</div>
        </div>
      </FormContainer>
      <ToastContainer />
    </>
  );
}

export default Register

const FormContainer = styled.div``;
