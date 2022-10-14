var io = require('socket.io')(8080); // The port should be different of your HTTP server.

io.on('connection', function (socket) { // Notify for a new connection and pass the socket as parameter.
    console.log('new connection');

    var incremental = 0;
    setInterval(function () {
        console.log('emit new value', incremental);

        socket.emit('update-value', incremental); // Emit on the opened socket.
        incremental++;
    }, 1000);

});