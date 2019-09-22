export default onMessage => {
    var socket = new WebSocket("ws://localhost:8080/game")
    socket.onmessage = onMessage
    return socket
};
