// fetches a socket connection using the address defined in env.local
// This function returns a connected websocket, but lacks a connection id
// The page following connection must wait for the id to be assigned before
// replacing the onmessage listener
let getSocket = (setSocketID) => {
    console.log('establishing socket connection')

    let ws = new WebSocket("wss://localhost:8080")
    ws.addEventListener('open', (e) => { 
        console.log("socket connection established")
    })

    ws.onmessage = (e) => {
        let msg = e.data
        console.log('received from socket: ', msg)
        if (msg.startsWith('connection id:'))
            setSocketID(parseInt(msg.split(':')[1]))
            // set id and connected params using provided functions
    }

    window.onbeforeunload = () => {
        setSocketID(-1)
        ws.onclose = () => {}
        ws.close()
    }

    return ws;
}

export default getSocket;
