export interface Config {
  mosquitto: Mosquitto;
  database: Database;
}

export interface Database {
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
}

export interface Mosquitto {
  port: number;
  broker: string;
  id: string;
}
