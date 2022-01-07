import React, {useEffect, useState} from 'react'
import {Container, Card, Button, Row, Col} from "react-bootstrap";
import './ChannelList.css';
import { useSocketContext } from '../SocketContext';

export const ChannelList = () => {
    const [channels, setChannels] = useState([])
    const {socketFetch, socketID} = useSocketContext()

    useEffect(()=>{
        socketFetch('get/channels', setChannels)
    }, [socketID, socketFetch])

    // const receiveData = async(response) => {
    //     let msg = response.data
    //     console.log("From socket:", msg)
    //     try{
    //         let val = await JSON.parse(msg)
    //         setChannels(val)
    //     } catch (e) {console.log("invalid Json response (probably a test)")}
    // }
    
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
        </Container>
    )
}