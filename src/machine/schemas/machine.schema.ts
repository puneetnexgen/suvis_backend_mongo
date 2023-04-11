
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { HydratedDocument } from "mongoose";

export type MachineDocument = HydratedDocument<Machine>

@Schema()
export class Machine {

   @Prop()
   machineToken: string;

   @Prop()
   customerName: string;

   @Prop()
   machineName: string;
}
export const MachineSchema = SchemaFactory.createForClass(Machine);