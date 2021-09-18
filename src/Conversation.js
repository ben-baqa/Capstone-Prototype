import React from 'react'
import { useState } from 'react'
import {FaTrash} from 'react-icons/fa'

export const Conversation = ({entries, deleteMessage}) => {
    return <div className="convo-container">
        {entries.map((entry)=>{
            return <ConversationEntry key = {entry.date} {...entry} deleteMessage={deleteMessage}/>
        })}
    </div>
}

const ConversationEntry = ({sender, date, text, deleteMessage})=>{
    const [showHeader, setShowHeader] = useState(false)

    const dateTime = new Date(date * 1000);
    return <article className="convo-entry" key={date}
        onMouseOver={()=>setShowHeader(true)}
        onMouseOut={()=>setShowHeader(false)}
    >
        {showHeader && <article className="entry-header">
            <h5 className="entry-sender">{sender}</h5>
            <h6 className="entry-date">{dateTime.toLocaleDateString()}</h6>
            <h6 className="entry-date">{dateTime.toLocaleTimeString()}</h6>
        </article>}
        <h2 className="message">{text}</h2>
        <button onClick={(e)=>deleteMessage(e,{sender, date, text})}><FaTrash/></button>
    </article>
}
