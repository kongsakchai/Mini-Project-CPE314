import mqtt from "mqtt";
import { config } from "./config";
import { Data } from "./model/data.model";
import string2NumArray from "./utils/string2NumArray";
import { insertToSensorData } from "./database";

const store: Map<string, string> = new Map();

const handleError = (err: Error) => err && console.error(err);

const handleData = (payload: Buffer) => {
  const payloadStr = payload.toString();
  const id = payloadStr.substring(0, 4);
  const message = payloadStr.substring(4);

  if (store.has(id)) {
    let data = store.get(id) ?? "";
    data = data + message;
    store.set(id, data);
  } else {
    store.set(id, message);
  }
};

const handleEnd = async (payload: Buffer) => {
  const id = payload.toString();
  try {
    const data: Data = JSON.parse(store.get(id) ?? "");
    data.node_id = id;
    data.ThermalArray = string2NumArray(data.ThermalArray);
    insertToSensorData(data);
  } catch {
    console.log(`Node : `, id);
    console.error(`Missing data`);
  }
  store.delete(id);
};

const client = mqtt.connect({
  port: config.mosquitto.port,
  path: config.mosquitto.broker,
  clientId: "Server_" + config.mosquitto.id,
});

client.on("connect", packet => {
  console.log("Connect to broker");
  console.table(config.mosquitto);

  client.subscribe("sensorData", handleError);
  client.subscribe("end", handleError);
});

client.on("message", (topic: string, payload: Buffer) => {
  if (topic === "sensorData") handleData(payload);
  else if (topic === "end") handleEnd(payload);
});

client.on("error", err => {
  console.error("Connect broker error : ", err.message);
});
