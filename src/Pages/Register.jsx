import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import '../Styles/Register.css'
import logo from '../logo2.png'

const Register = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("form");
    }
    const handleChange = (e) => {

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
        </>
    )

}

const FormContainer = styled.div``

export default Register