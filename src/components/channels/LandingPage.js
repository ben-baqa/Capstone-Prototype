import React, {useEffect, useState} from 'react'
import {Container, Button} from "react-bootstrap";
import './LandingPage.css';

export const LandingPage = () => {
    const [socket, setSocket] = useState(null)
    const [id, setID] = useState(-1)

    useEffect(() => {
        console.log('establishing socket connection')

        let ws = new WebSocket('ws://localhost:3002')
        ws.addEventListener('open', (e) => {
            // ws.addEventListener('message', (e) => {
            //     let msg = e.data
            //     console.log('received from socket: ', msg)
            //     if (msg.startsWith('connection id:'))
            //         setID(parseInt(msg.split(':')[1]))
            // })
            // ws.send('new instance connected via socket')
        })
        ws.onmessage = (e) => {
            let msg = e.data
            console.log('received from socket: ', msg)
            if (msg.startsWith('connection id:'))
                setID(parseInt(msg.split(':')[1]))
        }

        window.onbeforeunload = () => {
            ws.onclose = () => {}
            ws.close()
        }

        setSocket(ws)
    }, [])

    return(
        <Container>
            <div className="title-container">
                <h1>Welcome to TalkBox</h1>
            </div>
            <div className="link-container">
                <Button id="link-button" href="/channels">Go To Channels</Button>
                <Button onClick={()=> socket.send(`test:${id}`)}>Test Socket</Button>
            </div>
        </Container>
    )
}