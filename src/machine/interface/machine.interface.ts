import { Document } from "mongoose";

export interface Imachine extends Document{

  readonly machineToken: string;

  readonly customerName: number;
 
  readonly machineName: string;
}