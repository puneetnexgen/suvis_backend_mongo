
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { HydratedDocument, SchemaTypes } from "mongoose";

export type ParameterDocument = HydratedDocument<Parameter>


interface NestedSchema {

   paramName: string;

   value: any;

   timeStamp: string;
}

@Schema()
export class Parameter {

   @Prop()
   machineId: string;

   @Prop()
   recipeId: string;

   @Prop({ type: [{ paramName: String, value: SchemaTypes.Mixed, timeStamp: String} ], required: true })
   values: NestedSchema[];
   
}
export const ParametersSchema = SchemaFactory.createForClass(Parameter);