import React from 'react'
import styled from 'styled-components'
import picker from 'emoji-picker-react'
import { IoMdSend } from 'react-icons/io'
import { BsEmojiSmileFill } from 'react-icons/bs'
import '../Styles/Chatinput.css'

const ChatInput = () => {
    return (
        <Container className='chatinput-container'>
            <div className="button-container">
                <div className='emoji'>
                    <BsEmojiSmileFill />
                </div>
            </div>
            <form className="form-chat">
                <input type="text" placeholder='type your message here..' className='input-chat'/>
                <button className='chat-submit'>
                    <IoMdSend/>
                </button>
            </form>
        </Container>
    )
}

const Container = styled.div``

export default ChatInput