import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {Container} from 'react-bootstrap';
import {Conversation} from "./Conversation";
import './ChannelShow.css'
import { useSocketContext } from '../SocketContext';
import useForceUpdate from '../../customHooks';

export const ChannelShow = () => {
  // get channel id from url
  let {id} = useParams()
  
  let forceUpdate = useForceUpdate()

  const {socketFetch, socketSend, socketID} = useSocketContext()

  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('')

  useEffect(()=>{
    // fetchData()
    socketFetch(`get/channel/${id}`, setMessages)
  }, [socketID, socketFetch, id])

  const handleSubmit=async(e)=>{
    e.preventDefault();
    socketSend(`post/Default User/${text}/${id}`)
  }

  const deleteMessage=async(e, message)=>{
    e.preventDefault();
    socketSend(`delete/${message.sender}/${message.date}/${id}`)
  }

    return (
        <Container id="container">
            <h1>Channel {id}</h1><br/>
            <Container>
                <Conversation entries={messages} deleteMessage={deleteMessage}/>
                <form className="convo-container">
                  <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
                  <button type='submit' onClick={handleSubmit}>send</button>
                </form><br/>
                <a href="/channels">Back to All Channels</a>
            </Container>
        </Container>
    )
}