import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {Container, Row, Col, Button, Form, Card} from 'react-bootstrap';
import {Conversation} from "./Conversation";
import './ChannelShow.css'
import { useSocketContext } from '../SocketContext';
import {useAuth} from "../contexts/AuthContext";
import useForceUpdate from '../../customHooks';

export const ChannelShow = () => {
  // get channel id from url
  let {id} = useParams()
  
  let forceUpdate = useForceUpdate()

  const {socketFetch, socketSend, socketID} = useSocketContext()

  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');

  const {currentUser} = useAuth();
  const username = currentUser.email.split('@')[0];
  const [author, setAuthor] = useState(username);

  useEffect(()=>{
    // fetchData()
    socketFetch(`get/channel/${id}`, setMessages)
  }, [socketID, socketFetch, id])

  const handleSubmit=async(e)=>{
    e.preventDefault();
    socketSend(`post/${author}/${text}/${id}`)
  }

  const deleteMessage=async(e, message)=>{
    e.preventDefault();
    socketSend(`delete/${message.sender}/${message.date}/${id}`)
  }

    return (
        <Container id="container">
            <Container fluid>
                <Row>
                    <Col>
                        <br/><h1>Channel {id}</h1><br/>
                    </Col>
                    <Col>
                        <div className="back-button-div">
                            <br/><Button variant="outline-primary" href="/channels">Back to All Channels</Button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Conversation entries={messages} deleteMessage={deleteMessage} author={author}/>
                    </Col>
                    <Col>
                        <Card bg={'dark'} text={'white'}>
                            <Card.Header>ChatBox</Card.Header>
                            <Card.Body>
                                <Form>
                                    <Card.Title>Sender Name</Card.Title>
                                    <Form.Control type="text" placeholder="Username" value={author} onChange={(e)=>setAuthor(e.target.value)}></Form.Control><br/>
                                    <Card.Title>Message Text</Card.Title>
                                    <Form.Control type="text" placeholder="Type message here..." value={text} onChange={(e)=>setText(e.target.value)}></Form.Control><br/>
                                    <Button id="submit-button" variant="success" type='submit' onClick={handleSubmit}>send</Button>
                                </Form>
                            </Card.Body>
                        </Card>

                    </Col>

                </Row>

            </Container>
        </Container>
    )
}