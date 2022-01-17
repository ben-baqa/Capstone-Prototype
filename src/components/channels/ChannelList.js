import React, {useEffect, useState} from 'react'
import {Container, Card, Button, Row, Col} from "react-bootstrap";
import {Link} from 'react-router-dom';
import './ChannelList.css';
import { GrChannel } from 'react-icons/gr';

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