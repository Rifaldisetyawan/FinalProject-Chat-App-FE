import React from 'react'
import styled from 'styled-components'
import avatar from '../logo.svg'
import '../Styles/ChatContainer.css'
import ChatInput from './ChatInput'
import Messages from './Messages'

const ChatContainer = () => {
  return (
    <Container className='chat'>
        <div className="chat-header">
            <div className="user-details">
                <div className="avatar-chat">
                    <img src={avatar} alt="avatar" />
                </div>
                <div className="username-chat">
                    <h3>Aldi</h3>
                </div>
            </div>
        </div>
        <div className="chat-message">
            <div>
            <div className='message received'>
                <div className="content">
                    <p>hallo</p>
                </div>
            </div>
            <div className='message sended '>
                <div className="content">
                    <p>hallo</p>
                </div>
            </div>
            <div className='message sended '>
                <div className="content">
                    <p>hallo</p>
                </div>
            </div>
            </div>
            
        </div>
        <ChatInput />
    </Container>
  )
}
const Container = styled.div``
export default ChatContainer