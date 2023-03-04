import path from "path";
import fs from "fs";

import { Config } from "./model/config.model";

export const generateID = () => {
  let id = "";
  while (id.length < 4) id += Math.floor(Math.random() * 10);
  return id;
};

const defaultConfig: Config = {
  mosquitto: {
    port: 1082,
    broker: "mqtt://localhost",
    id: generateID(),
  },
  database: {
    host: "localhost",
    port: 5432,
    user: "",
    password: "",
    database: "",
  },
};

const createConfig = (): Config => {
  try {
    const file = fs.readFileSync(path.join(__dirname, "../config.json"), "utf-8");
    const json: Config = JSON.parse(file);
    const config: Config = {
      mosquitto: { ...defaultConfig.mosquitto, ...json.mosquitto },
      database: { ...defaultConfig.database, ...json.database },
    };
    return config;
  } catch {
    // fs.writeFileSync(path.join(__dirname, "../config.json"), JSON.stringify(defaultConfig), "utf-8");
    return defaultConfig;
  }
};

export const config = createConfig();
