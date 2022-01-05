let getSocket = (setID, address = 'localhost', port = 8080) => {
    console.log('establishing socket connection')

    let ws = new WebSocket(`wss://${address}:8080`)
    ws.addEventListener('open', (e) => { 
        console.log("socket connection established")
    })

    ws.onmessage = (e) => {
        let msg = e.data
        console.log('received from socket: ', msg)
        if (msg.startsWith('connection id:'))
            setID(parseInt(msg.split(':')[1]))
    }

    window.onbeforeunload = () => {
        ws.onclose = () => {}
        ws.close()
    }

    // console.log("waiting for connection id from Socket server")
    // while (id < 0);
    // console.log("connect id received, proceeding")

    return ws;
}

export default getSocket;
