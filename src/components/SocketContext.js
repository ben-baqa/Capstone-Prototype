import React, {useState} from 'react'
import App from './App'
import getSocket from '../Socket'
import { RiSpectrumLine } from 'react-icons/ri'

export const SocketContext = React.createContext()
export const useSocketContext = () => React.useContext(SocketContext)

const AppWithContext = () =>{
    // The websocket itself
    const [socket, setSocket] = useState(null)
    // the server assigned integer id
    // doubles as an indicator of connected state
    const [socketID, setSocketID] = useState(-1)

    let stateObject =
    {
        socket, setSocket,
        socketID, setSocketID,
        // abstracts the fetch process for ease of use,
        // message is the request ex: get/all , get/channel/47 , etc
        // used like this: socketFetch("get/channels", setChannels)
        socketFetch: (message, onResponse) =>
        {
            // proceed if connection is valid, otherwise reconnect
            if (!checkConnection()) return
            // assign onmessage event to handle response json using onResponse
            socket.onmessage = wrapResponse(onResponse)
            // send message to server tagged with socketID
            socket.send(`${message}:${socketID}`)
        },
        // sends message to the connected socket with no response handling
        socketSend: (message) => {
            // proceed is connection is valid, otherwise reconnect
            if (!checkConnection()) return
            // send message to server tagged with socketID
            socket.send(`${message}:${socketID}`)
        }
    }

    // returns true if current connection is valid
    // otherwise, reconnects the socket
    let checkConnection = () =>
    {
        // connection is valid
        if (socketID >= 0) return true

        if (!socket)
        {
            // get new socket connection
            console.log("Attempted to use unconnected socket, reconnecting...")
            setSocket(getSocket(setSocketID))
        }
        return false;
    }

    // returns a wrapped function that executes
    // in response to a JSON message from the socket
    let wrapResponse = (onResponse) => (response) => {
        let msg = response.data
        if (msg == 'ping')
            return;
        console.log("From socket:", msg)
        try{
            let val = JSON.parse(msg)
            onResponse(val)
        } catch (e) {
            console.log("invalid Json response (probably a test)")
        };
    }

    return (
        <SocketContext.Provider value={ stateObject }>
            <App/>
        </SocketContext.Provider>
    )
}

export default AppWithContext;