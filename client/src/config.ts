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
};

const createConfig = (): Config => {
  try {
    const file = fs.readFileSync(path.join(__dirname, "../config.json"), "utf-8");
    const json: Config = JSON.parse(file);
    const config: Config = {
      mosquitto: { ...defaultConfig.mosquitto, ...json.mosquitto },
    };
    return config;
  } catch {
    return defaultConfig;
  }
};

export const config = createConfig();
