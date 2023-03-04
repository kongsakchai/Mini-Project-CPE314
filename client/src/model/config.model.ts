export interface Config {
  mosquitto: Mosquitto;
}

export interface Mosquitto {
  port: number;
  broker: string;
  id: string;
}
