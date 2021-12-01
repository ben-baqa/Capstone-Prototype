import React, {useEffect, useState} from 'react'
import {Container, Card, Button, Row, Col} from "react-bootstrap";
import {Link} from 'react-router-dom';
import './ChannelList.css';
const url = 'http://localhost:3001'

export const ChannelList = () => {
    const [channels, setChannels] = useState([])

    useEffect(()=>{
        const fetchData = async()=>{
            const response = await fetch(url + '/channels')
            const val = await response.json()
            setChannels(val)
        }
        fetchData()
    }, [])
    
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
        <Container>
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