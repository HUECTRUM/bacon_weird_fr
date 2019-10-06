const uuidv4 = require('uuid/v4')

export default onMessage => {
    var gameId = uuidv4()
    var socket = new WebSocket("ws://localhost:8080/game/" + gameId)
    socket.onmessage = onMessage
    return socket
};
