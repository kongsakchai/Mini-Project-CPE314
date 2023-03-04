export interface Data {
  id?: number;
  Time: string;
  Humidity: number;
  Temperature: number;
  ThermalArray: number[] | string;
  node_id?: string;
}
