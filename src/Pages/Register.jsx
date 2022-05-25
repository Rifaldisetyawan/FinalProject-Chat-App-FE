import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import '../Styles/Register.css'
import logo from '../logo2.png'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import axios from 'axios';
import { registerRoute } from '../Utils/APIRoutes';

const Register = () => {
    const [values, setValues]=useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const toastOptions = {
        position: "bottom-right",
        autoClose: 2000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark"
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        if(handleValidation()){
            const {password,confirmPassword,username,email} = values;
            const {data} = await axios.post(registerRoute, {
                username,
                email,
                password
            })
        }
    }
    const handleValidation =()=>{
        const {password,confirmPassword,username,email} = values;
        if(password!==confirmPassword){
            toast.error("Password and Confirm Password Should Be Same.",toastOptions)
            return false
        } else if (username.length<3){
            toast.error("Username Must Be Greater Then 3 Characther.",toastOptions)
            return false
        }else if (password.length<8){
            toast.error("Password Must Be Equeal or Greater Then 8 Characther.",toastOptions)
            return false
        }else if (email===""){
            toast.error("Email is Required.",toastOptions)
            return false
        }
        return true
    }
    const handleChange = (e) => {
        setValues({...values,[e.target.name]: e.target.value})
    }
    return (
        <>
            <FormContainer className='container'>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className='brand'>
                        <img src={logo} alt='' />
                    </div>
                    <input type='text' placeholder="Username... " name='username' onChange={e => handleChange(e)} />
                    <input type='email' placeholder="Email... " name='email' onChange={e => handleChange(e)} />
                    <input type='password' placeholder="Password.. " name='password' onChange={e => handleChange(e)} />
                    <input type='password' placeholder="Confirm Pasword.. " name='confirmPassword' onChange={e => handleChange(e)} />
                    <button type='submit'>Create User</button>
                    <span>Already Have An Account? <Link to="/login">Login</Link></span>
                </form>
            </FormContainer>
            <ToastContainer/>
        </>
    )

}

const FormContainer = styled.div``

export default Register