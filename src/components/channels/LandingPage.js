import React from 'react'
import {Container, Button} from "react-bootstrap";
import './LandingPage.css';
// import getSocket from '../../Socket';

export const LandingPage = () => {

    return(
        <Container id="container">
            <div className="title-container">
                <h1>Welcome to TalkBox</h1>
            </div>
            <div className="login-container">
                <form action="/login" method="POST" className="validated-form" noValidate>
                    <div className="link-container">
                        <Button id="link-button" href="/login">Log In</Button>
                    </div>
                    <div className="link-container">
                        <Button id="link-button" href="/signup">Sign Up</Button>
                    </div>
                    {/* <div className='link-container'>
                        <Button className="link-button" onClick={()=> socket.send(`test:${id}`)}>Test Socket</Button>
                    </div> */}
                </form>
            </div>
        </Container>
    )
}