import React from 'react'
import {RiDeleteBinLine} from 'react-icons/ri'
import {FaUserCircle} from 'react-icons/fa'
import {IoMdTime} from 'react-icons/io'
import {BsCalendarDate} from 'react-icons/bs'
import {Card, Button} from 'react-bootstrap';
import './Conversation.css';

export const Conversation = ({entries, deleteMessage, author}) => {
    return <div>
        {entries.map((entry)=>{
            return (
                <ConversationEntry key = {entry.date} {...entry} deleteMessage={deleteMessage} author={author}/>
            )
        })}
    </div>
}

const ConversationEntry = ({sender, date, text, deleteMessage, author})=>{
    const dateTime = new Date(date * 1000);
    const variant = author === sender ? 'dark' : 'light';
    return (
        <Card className="message-card" bg={variant} text={variant === 'light' ? 'dark' : 'white'}>
            <Card.Header>
                <div className="header-div">
                    <div className="user-icon"><FaUserCircle/></div><h5 className="sender-header">{sender}</h5>
                    <Button variant="outline-danger"
                            onClick={(e)=>deleteMessage(e,{sender, date, text})}
                            className="bin-button">
                        <RiDeleteBinLine/>
                    </Button>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    <h2>{text}</h2>
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <div className="footer-div">
                    <IoMdTime id="footer-time-icon"/> <small>{dateTime.toLocaleTimeString()}</small>
                    <div className="footer-date-div"><BsCalendarDate id="footer-date-icon"/><small>{dateTime.toLocaleDateString()}</small></div>
                </div>
            </Card.Footer>
        </Card>
    )
}
