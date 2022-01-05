import React, {useRef, useState, useContext} from 'react'
import {Form, Button, Card, Alert, Container} from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'
import {useAuth} from "../contexts/AuthContext";
import './Login.css';

import { SocketContext } from '../App';
import getSocket from '../../Socket';

export default function Login(){
    // // establish global context for socket connection
    // static const contextType = StoreContext
    const {setSocket, setSocketID} = useContext(SocketContext);

    const emailRef = useRef();
    const passwordRef = useRef();
    const {login} = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try{
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value);
            history('/channels');

            // establish socket connection and store it in global context
            // let {socket, socketID} = getSocket();
            // this.context.setSocket(socket);
            // this.context.setSocketID(socketID);

            let newSocket = getSocket(setSocketID)
            setSocket(newSocket)
        } catch {
            setError('Failed to log-in.')
        }
        setLoading(false)
    }

    return(
        <Container id="form-container" className="d-flex algin-items-center justify-content-center">
            <div className="w-100" style={{maxWidth:'400px'}}>
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Log In</h2>
                        {error && <Alert variant='danger'>{error}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" ref={emailRef} required/>
                            </Form.Group>

                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" ref={passwordRef} required/>
                            </Form.Group>

                            <Button disabled={loading} className="w-100 mt-4" type="submit">Log In</Button>
                        </Form>
                    </Card.Body>
                </Card>
                <div id="redirect-link" className="w-100 text-center mt-2">
                    New User? <Link to="/signup">Sign Up</Link>
                </div>
            </div>
        </Container>
    )
}