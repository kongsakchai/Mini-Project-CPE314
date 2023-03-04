export interface Data {
  Time: string;
  Humidity: number;
  Temperature: number;
  ThermalArray: number[] | string;
  node_id?: string;
}
