const mqtt = require('mqtt')

const host = 'broker.mqtt-dashboard.com'
const port = '1883'
const clientId = `CSiot1015`

const connectUrl = `mqtt://${host}:${port}`
const client = mqtt.connect(connectUrl, {
  clientId,
  clean: true,
  connectTimeout: 4000,
  username: 'emqx',
  password: 'public',
  reconnectPeriod: 1000,
})

const topic = 'CSiot_pub'
client.on('connect', () => {
  console.log('Connected')
  client.subscribe([topic], () => {
    console.log(`Subscribe to topic '${topic}'`)
  })
  client.publish(topic, 'nodejs mqtt test', { qos: 0, retain: false }, (error) => {
    if (error) {
      console.error(error)
    }
  })
})

const http = require("http");
const { payload } = require('@hapi/hapi/lib/validation')

const express = require("express");
const requestListener = express();
requestListener.use(express.static("timer"));

requestListener.get('/',(req, res) => {
  
  res.writeHead(200, {'Content-Type': 'text/html'});    
  res.end("My first server!");
});

const server = http.createServer(requestListener);
// server.listen(port1, host1, () => {
//     console.log(`Server is running on http://${host1}:${port1}`);
// });

var io = require('socket.io')(server);
var timer;
io.sockets.setMaxListeners(0)
io.on('connection', function(socket) {
client.on('message', (topic, payload) => {
  socket.emit('trigger',payload);
  })
  
socket.emit('triggerindex');

socket.on('callbacktimer',function(data){
  timer = data;
  console.log('callbacktimer' + timer + data)
  })

socket.on('callbackindex',function(){
  setInterval(function(){
    socket.emit('timerkonto',timer);
  }, 100);
  socket.on('jadinol',function(){
    timer = 0;
  })
})
});


client.on('message', (topic, payload) => {
 return console.log(payload);
  });

server.listen(8000);