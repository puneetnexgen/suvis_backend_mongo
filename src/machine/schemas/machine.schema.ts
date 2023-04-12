
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Type } from "class-transformer";
import mongoose, { HydratedDocument } from "mongoose";
import { Recipe } from "src/recipe/schemas/recipe.schema";

export type MachineDocument = HydratedDocument<Machine>

@Schema()
export class Machine {

   @Prop({ type: Number, required: true, unique: true })
   id: number;
    
   @Prop()
   machineToken: string;

   @Prop()
   customerName: string;

   @Prop()
   machineName: string;

   set nextId(value: number) {
    this.id = value;
  }
}
export const MachineSchema = SchemaFactory.createForClass(Machine);