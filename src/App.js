import { Conversation } from './Conversation';
import {testData} from './testData'

// new Date().toUTCString()
function App() {
  return <>
    {testData.map((convo, index)=>{
      return <Conversation key={index} entries={convo}/>
    })}
  </>
}

export default App;
