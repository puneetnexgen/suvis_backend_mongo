import { ApiProperty } from "@nestjs/swagger";
import { Document } from "mongoose";

export class CreateDashboardDto {

  @ApiProperty({example: "dashboard_1"})
  dashboardName: string;

  @ApiProperty({example: "suvi"})
  machineToken: string;

  @ApiProperty({example: 1})
  loc_x: number;

  @ApiProperty({example: 2})
  loc_y: number;

  @ApiProperty({example: 3})
  size_x: number;

  @ApiProperty({example: 4})
  size_y: number;

}
