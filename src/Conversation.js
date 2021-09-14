import React from 'react'

export const Conversation = ({entries}) => {
    return <div className="convo-container">
        {entries.map((entry)=>{
            const {date, sender, text} = entry
            return <article className="convo-entry" key={date}>
                <article className="entry-header">
                    <h5 className="entry-sender">{sender}</h5>
                    <h6 className="entry-date">{date}</h6>
                </article>
                <h2 className="message">{text}</h2>
            </article>
        })}
    </div>
}
