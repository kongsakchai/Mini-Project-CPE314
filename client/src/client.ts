import mqtt from "mqtt";
import { config } from "./config";
import { Data } from "./model/data.model";
import spliStringByLimit from "./utils/splitStringByLimit";
import { data } from "./readData";
const handleError = (err: Error | undefined) => err && console.error(err);

const client = mqtt.connect({
  port: config.mosquitto.port,
  path: config.mosquitto.broker,
});

client.on("connect", packet => {
  console.log("Connect to broker");
  console.table(config.mosquitto);
  sendData();
});

client.on("error", err => {
  console.error(err.message);
});

const send = (data: Data) => {
  const dataString = JSON.stringify(data);
  const payloads = spliStringByLimit(dataString, 246);
  for (let n = 0; n < payloads.length; n++) {
    client.publish("sensorData", config.mosquitto.id + payloads[n], handleError);
  }
  client.publish("end", config.mosquitto.id, handleError);
};

const sendData = () => {
  let i = 0;
  let interval = setInterval(() => {
    console.log("Send Data : ", i);
    send(data[i]);
    i++;
    if (data?.length && i == data.length) clearInterval(interval);
  }, 3000);
};
