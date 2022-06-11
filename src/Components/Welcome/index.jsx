import React, { useState, useEffect } from "react";
import styled from "styled-components";
import welcomelogo from '../../logo2.png'
import '../Welcome/Welcome.css'
export default function Welcome() {
  const [username, setUserName] = useState("");
  // eslint-disable-next-line
  useEffect(async () => {
    setUserName(
      await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      ).username
    );
  }, []);
  return (
    <Container className="welcome">
      <div className="welcome-div">
        <img src={welcomelogo} alt="" className="welcome-image" />
        <h1>
          Welcome, <span className="welcome-span">{username} !</span>
        </h1>
        <h3>Please select a chat to Start messaging.</h3>
      </div>

    </Container>
  );
}

const Container = styled.div`
`;
