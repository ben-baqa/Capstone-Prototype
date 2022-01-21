import React, {useEffect, useState} from 'react'
import {Container, Card, Row, Col} from "react-bootstrap";
import './ChannelList.css';
import { GrChannel } from 'react-icons/gr';

// const url = 'http://localhost:3001'
import { useSocketContext } from '../SocketContext';

export const ChannelList = () => {
    const [channels, setChannels] = useState([])
    const {socketFetch, socketID} = useSocketContext()

    useEffect(()=>{
        socketFetch('get/channels', (val) => {console.log(val);setChannels(val)})
    }, [socketID, socketFetch])
    
    function renderList(){
        return channels.map(channel => {
            return(
                <Col xs={4} className="link-col" key={channel}>
                    <Card  className="channel-card">
                        <Card.Body>
                            <GrChannel style={{marginBottom:"10px"}}/>
                            <Card.Title>
                                <a style={{color:"blue",textDecoration:"none"}} href={`/channels/${channel}`}>Channel {channel}</a>
                            </Card.Title>
                        </Card.Body>
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
        </Container>
    )
}