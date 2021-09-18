import { Conversation } from './Conversation';
// import {testData} from './testData'
import {useState, useEffect} from 'react'
const url = 'http://localhost:3001'

// new Date().toUTCString()
function App() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('')

  useEffect(()=>{
    fetchData()
  }, [])

  const handleSubmit=async(e)=>{
    e.preventDefault();
    let v = await JSON.stringify({sender:'Default User',text});
    console.log(v);
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({sender:'Default User',text})
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
    const response = await fetch(url + '/all')
    const val = await response.json()
    setMessages(val);
  }


  return <>
    <Conversation entries={messages} deleteMessage={deleteMessage}/>
    <form className="convo-container">
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
      <button type='submit' onClick={handleSubmit}>send</button>
    </form>
    {/* <button className="convo-container" onClick={fetchData}>Refresh</button> */}
  </>
}

export default App;
