import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { HydratedDocument } from "mongoose";

export type RecipeDocument = HydratedDocument<Recipe>

@Schema({timestamps:true})
export class Recipe {

   @Prop()
   machineId: string;

   @Prop()
   recipeName: string;
}
export const RecipeSchema = SchemaFactory.createForClass(Recipe);