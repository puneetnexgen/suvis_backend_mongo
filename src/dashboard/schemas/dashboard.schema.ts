import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type DashboardDocument = HydratedDocument<Dashboard>; 

@Schema({timestamps:true})
export class Dashboard {
  @Prop({unique:true})
  dashboardName: string;

  @Prop()
  machineToken: string;

  @Prop()
  loc_x: number;

  @Prop()
  loc_y: number;

  @Prop()
  size_x: number;

  @Prop()
  size_y: number;

}

export const DashboardSchema = SchemaFactory.createForClass(Dashboard)
