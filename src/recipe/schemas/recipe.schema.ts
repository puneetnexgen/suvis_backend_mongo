import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { HydratedDocument } from "mongoose";

export type RecipeDocument = HydratedDocument<Recipe>

@Schema()
export class Recipe {

   @Prop({unique:true, required:true, type:Number})
   id:number;

   @Prop()
   machineId: number;

   @Prop()
   recipeName: string;

   set nextId(value: number) {
      this.id = value;
    }
}
export const RecipeSchema = SchemaFactory.createForClass(Recipe);