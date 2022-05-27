import React from 'react'
import '../Styles/Contacts.css'
import logo from '../logo2.png'
import avatar from '../logo.svg'
import styled from 'styled-components'

const Contacts = () => {
    return <>{
        <Container className='container-contact'>
            <div className='brand-main'>
                <img src={logo} alt="logo" />
            </div>
            <div className="current-user">
                <div className="avatar">
                    <img src={avatar} alt="avatar" />
                </div>
                <div className="username">
                    <h2>rifaldi</h2>
                </div>
            </div>
            <div className="contacts">
                <div className="contact">
                    <div className="avatar">
                        <img src={avatar} alt="avatar" />
                    </div>
                    <div className="username">
                        <h3>Aldi</h3>
                    </div>
                </div>
                <div className="contact">
                    <div className="avatar">
                        <img src={avatar} alt="avatar" />
                    </div>
                    <div className="username">
                        <h3>Aldi</h3>
                    </div>
                </div>
                <div className="contact">
                    <div className="avatar">
                        <img src={avatar} alt="avatar" />
                    </div>
                    <div className="username">
                        <h3>Aldi</h3>
                    </div>
                </div>
                <div className="contact">
                    <div className="avatar">
                        <img src={avatar} alt="avatar" />
                    </div>
                    <div className="username">
                        <h3>Aldi</h3>
                    </div>
                </div>
                <div className="contact">
                    <div className="avatar">
                        <img src={avatar} alt="avatar" />
                    </div>
                    <div className="username">
                        <h3>Aldi</h3>
                    </div>
                </div>
                <div className="contact">
                    <div className="avatar">
                        <img src={avatar} alt="avatar" />
                    </div>
                    <div className="username">
                        <h3>Aldi</h3>
                    </div>
                </div>
                <div className="contact">
                    <div className="avatar">
                        <img src={avatar} alt="avatar" />
                    </div>
                    <div className="username">
                        <h3>Aldi</h3>
                    </div>
                </div>
                <div className="contact">
                    <div className="avatar">
                        <img src={avatar} alt="avatar" />
                    </div>
                    <div className="username">
                        <h3>Aldi</h3>
                    </div>
                </div>
                <div className="contact">
                    <div className="avatar">
                        <img src={avatar} alt="avatar" />
                    </div>
                    <div className="username">
                        <h3>Aldi</h3>
                    </div>
                </div>
                <div className="contact">
                    <div className="avatar">
                        <img src={avatar} alt="avatar" />
                    </div>
                    <div className="username">
                        <h3>Aldi</h3>
                    </div>
                </div>
            </div>
            
        </Container>
    }
    </>
}

const Container = styled.div``

export default Contacts