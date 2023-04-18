
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Type } from "class-transformer";
import mongoose, { HydratedDocument } from "mongoose";
import { Recipe } from "src/recipe/schemas/recipe.schema";

export type MachineDocument = HydratedDocument<Machine>

@Schema({timestamps:true})
export class Machine {
 
   @Prop({unique:true, default:"suvi"})
   machineToken?: string;

   @Prop({default:""})
   customerName: string;

   @Prop({default: ""})
   machineName: string;

}
export const MachineSchema = SchemaFactory.createForClass(Machine);