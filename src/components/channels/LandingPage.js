import React from 'react'
import {Container, Button} from "react-bootstrap";
import './LandingPage.css';

export const LandingPage = () => {
    return(
        <Container>
            <div className="title-container">
                <h1>Welcome to TalkBox</h1>
            </div>
            <div className="link-container">
                <Button id="link-button" href="/channels">Go To Channels</Button>
            </div>
        </Container>
    )
}