import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type DashboardParamDocument = HydratedDocument<DashboardParam>; 

@Schema({timestamps:true})
export class DashboardParam {
  @Prop({unique:true})
  dashboardId: string;

  @Prop()
  recipeId: string;

  @Prop()
  paramId: string;

  @Prop({default:true})
  isActive: boolean;

}

export const DashboardParamSchema = SchemaFactory.createForClass(DashboardParam)
