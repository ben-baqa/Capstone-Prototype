import React from 'react'
import {FaTrash} from 'react-icons/fa'
import {Card, Button} from 'react-bootstrap';
import './Conversation.css';

export const Conversation = ({entries, deleteMessage}) => {
    return <div>
        {entries.map((entry)=>{
            return (
                <ConversationEntry key = {entry.date} {...entry} deleteMessage={deleteMessage}/>
            )
        })}
    </div>
}

const ConversationEntry = ({sender, date, text, deleteMessage})=>{
    const dateTime = new Date(date * 1000);
    return (
        <Card className="message-card">
            <Card.Body>
                <Card.Title>
                    <h2 className="message">{text}</h2>
                </Card.Title>
                <Card.Text>
                    <h5 className="entry-sender">{sender}</h5>
                    <h6 className="entry-date">{dateTime.toLocaleDateString()} - {dateTime.toLocaleTimeString()}</h6>
                </Card.Text>
                <Button onClick={(e)=>deleteMessage(e,{sender, date, text})}><FaTrash/></Button>
            </Card.Body>
        </Card>
    )
}
