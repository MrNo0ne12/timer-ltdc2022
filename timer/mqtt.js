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
var a;
var b;
client.on('message', (topic, payload) => {
  let a = payload.toString();
  let b = topic
  return a,b;
})

function payload(a,b) {
  return console.log('Received message: ', b, a);
}