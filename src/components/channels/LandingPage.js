import React from 'react'
import {Container, Button} from "react-bootstrap";
import './LandingPage.css';
import Signup from "../users/Signup";
import {AuthProvider} from "../contexts/AuthContext";

export const LandingPage = () => {
    return(
        <Container>
            <div className="title-container">
                <h1>Welcome to TalkBox</h1>
            </div>
            <div className="login-container">
                <form action="/login" method="POST" className="validated-form" noValidate>
                    {/*<div>*/}
                    {/*    <input className="login-input" placeholder="email" type="email" name="email" required/>*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <input className="login-input" placeholder="password"  type="text" name="password" required/>*/}
                    {/*</div>*/}
                    <div className="link-container">
                        <Button id="link-button" href="/login">Log In</Button>
                    </div>
                    <div className="link-container">
                        <Button id="link-button" href="/signup">Sign Up</Button>
                    </div>
                </form>
            </div>
        </Container>
        // <AuthProvider>
        //     <Container
        //         className="d-flex algin-items-center justify-content-center"
        //         style={{minHeight:"100vh"}}
        //     >
        //         <div className="w-100" style={{maxWidth:'400px'}}>
        //             <Signup/>
        //         </div>
        //     </Container>
        // </AuthProvider>

    )
}