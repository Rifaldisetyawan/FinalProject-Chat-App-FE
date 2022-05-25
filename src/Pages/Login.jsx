import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import '../Styles/Register.css'
import logo from '../logo2.png'

const Login = () => {
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
                        <input type='password' placeholder="Password.. " name='password' onChange={e => handleChange(e)} />
                        <button type='submit'>Login</button>
                        <span>Don't Have An Account? <Link to="/register">Register</Link></span>
                    </form>
                </FormContainer>
            </>
        )
    
    }
    
    const FormContainer = styled.div``


export default Login