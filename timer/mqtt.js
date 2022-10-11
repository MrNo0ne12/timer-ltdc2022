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

// window.onload = function () {
//   mqtt = document.getElementById("mqtt");
// }

// client.on('message', (topic, payload) => {
//   console.log("Received Message: ", topic, payload);
//   mqtt.innerHTML += 'Connection failed!<br />';
// })


// var a;
// var b;
// client.on('message', (topic, payload) => {
//   let a = payload.toString();
//   let b = topic
//   return console.log("Received Message: ", topic, payload);
// })

// function payload(a,b) {
//   return console.log('Received message: ', b, a);
// }

// function kirim(){
//   // b=2,a
//   // return a,b;
//   // client.on('message', (topic, payload) => {
   
//   //   return console.log("Received Message: ", topic, payload);
//   // })
// }

const http = require("http");
var fs = require('fs');
const { payload } = require('@hapi/hapi/lib/validation')

const host1 = 'localhost';
const port1 = 8000;

const express = require("express");
const requestListener = express();
requestListener.use(express.static("timer"));

// app.get('/', (req, res) => {
//   res.sendFile('index.html');
// })

requestListener.get('/', (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});  
client.on('message', (topic, payload) => {
 res.write("sensor: "+topic + payload)
})  
    // res.end("My first server!");
});

function test()
{
client.on('message', (topic, payload) => {
      return console.log("Received Message: ", topic, payload);
    })
}

function loop(payload){
  var payl = payload;
}

const server = http.createServer(requestListener);
server.listen(port1, host1, () => {
    console.log(`Server is running on http://${host1}:${port1}`);
});