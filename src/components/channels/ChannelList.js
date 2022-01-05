import React, {useEffect, useState, useContext} from 'react'
import {Container, Card, Button, Row, Col} from "react-bootstrap";
import {Link} from 'react-router-dom';
import './ChannelList.css';
import { SocketContext } from '../App';
const url = 'http://localhost:3001'

export const ChannelList = () => {
    const [channels, setChannels] = useState([])
    const {socket, setSocket, socketID} = useContext(SocketContext)

    useEffect(()=>{
        // const fetchData = async()=>{
        //     const response = await fetch(url + '/channels')
        //     const val = await response.json()
        //     setChannels(val)
        // }
        // fetchData()
        // console.log(socket)
        const newSocket = socket;
        newSocket.onmessage = receiveData;
        newSocket.send(`get/channels:${socketID}`)
        setSocket(newSocket)
    }, [])

    const receiveData = async(response) => {
        let msg = response.data
        console.log("From socket:", msg)
        let val = await JSON.parse(msg)
        setChannels(val)
    }
    
    function renderList(){
        return channels.map((item) => {
            let channel = item.channel;
            return(
                <Col xs={4} className="link-col">
                    <Card>
                        <Card.Body>
                            <Card.Title>Channel {channel}</Card.Title>
                        </Card.Body>
                        <Button href={`/channels/${channel}`}>Join</Button>
                    </Card>
                </Col>
            );
        });
    }

    return(
        <Container id="container">
            <h1 className="page-title">All Channels</h1>
            <Container fluid>
                <Row>
                    {renderList()}
                </Row>
            </Container>
            <br/><Button href="/channels/1">Sample Channel</Button>
            <div className='link-container'>
                <Button className="link-button" onClick={()=> socket.send(`test:${socketID}`)}>Test Socket</Button>
            </div>
        </Container>
    )
}