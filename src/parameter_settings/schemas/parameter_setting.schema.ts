
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { HydratedDocument } from "mongoose";

export type ParameterSettingsDocument = HydratedDocument<ParameterSetting>

@Schema()
export class ParameterSetting {

   @Prop()
   machineId: string;

   @Prop()
   param: string;

   @Prop()
   type: string;

   @Prop()
   timeStamp: string;
}
export const MachineSchema = SchemaFactory.createForClass(ParameterSetting);