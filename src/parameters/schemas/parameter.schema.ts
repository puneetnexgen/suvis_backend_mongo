
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { HydratedDocument } from "mongoose";

export type ParameterDocument = HydratedDocument<Parameter>

@Schema()
export class Parameter {

   @Prop()
   machineId: string;

   @Prop()
   recipeId: string;

   @Prop()
   parameterSettingId: string;


   @Prop()
   bVal: string;

   @Prop()
   fVal: string;

   @Prop()
   timeStamp: string;
}
export const MachineSchema = SchemaFactory.createForClass(Parameter);