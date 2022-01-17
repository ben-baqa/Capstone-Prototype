import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {Container} from 'react-bootstrap';
import {Conversation} from "./Conversation";
import './ChannelShow.css'
const url = 'http://localhost:3001'

export const ChannelShow = () => {
  // get channel id from url
  let {id} = useParams()

  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('')

  useEffect(()=>{
    fetchData()
  }, [])

  const handleSubmit=async(e)=>{
    e.preventDefault();
    // let v = await JSON.stringify({sender:'D vefault User',text});
    // console.log(v);
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({sender:'Default User',text, channel:id})
    });
    setText('')
    fetchData();
  }

  const deleteMessage=async(e, message)=>{
    e.preventDefault();
    await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(message)
    })
    fetchData();
  }

  const fetchData = async()=>{
    const response = await fetch(url + `/p/${id}`)
    const val = await response.json()
    setMessages(val);
  }

    return (
        <Container id="container">
            <br/><h1>Channel {id}</h1><br/>
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