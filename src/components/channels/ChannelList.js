import React, {useEffect, useState} from 'react'
import {Container} from "react-bootstrap";
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
    

    return(
        <Container>
            <h1>All Channels</h1>
            <ul>
                {channels.map((item) => {
                    let channel = item.channel
                    return <li key={channel}><a href={`/channels/${channel}`}>Channel {channel}</a></li>
                })}

                <li key={-1}><a href="/channels/1">View Sample Channel</a></li>
            </ul>
            
        </Container>
    )
}