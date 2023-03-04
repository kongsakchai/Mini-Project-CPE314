import { Client } from "pg";
import { config } from "./config";
import { Data } from "./model/data.model";

const client = new Client({
  host: config.database.host,
  port: config.database.port,
  user: config.database.user,
  password: config.database.password,
  database: config.database.database,
});

client.connect(err => {
  if (err) console.error(err.message);
  else console.log("Database connect");
});

const sqlInsertToSensorData =
  "INSERT INTO sensordata(time, humidity,temperature,thermal_array,node_id) VALUES($1,$2,$3,$4,$5) RETURNING *";

export const insertToSensorData = async (data: Data) => {
  try {
    showData(data);
    const res = await client.query(sqlInsertToSensorData, [
      data.Time,
      data.Humidity,
      data.Temperature,
      data.ThermalArray,
      data.node_id,
    ]);
    
    console.log("Insert success");
    console.log("-----------------------\n");
    return res;
  } catch (err) {
    console.error("Insert fail");
    console.error(err);
    return undefined;
  }
};

const showData = (data: Data) => {
  console.log("node_id : ", data.node_id);
  console.log("Time : ", data.Time);
  console.log("Humidity : ", data.Humidity);
  console.log("Temperature : ", data.Temperature);
  console.log("ThermalArray : ", data.ThermalArray);
};
