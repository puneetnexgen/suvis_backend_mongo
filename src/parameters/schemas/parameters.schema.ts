
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document, HydratedDocument, SchemaTypes } from "mongoose";

export type ParameterDocument = HydratedDocument<Parameter>


// interface NestedSchema {

//    paramName: string;

//    value: any;

//    timeStamp: string;
// }
@Schema()
export class Value {
  @Prop()
  paramName: string;

  @Prop()
  value: string;

  @Prop()
  timeStamp: string;
}

@Schema({timestamps:true})
export class Parameter extends Document {

   @Prop()
   machineId: string;

   @Prop()
   recipeId: string;

   @Prop({ type: [{ paramName: String, value: SchemaTypes.Mixed, timeStamp: String} ], required: true })
   values: Value[];
   
}
export const ParametersSchema = SchemaFactory.createForClass(Parameter);