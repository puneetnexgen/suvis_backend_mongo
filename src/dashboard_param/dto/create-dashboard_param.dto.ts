import { ApiProperty } from "@nestjs/swagger";

export class CreateDashboardParamDto {

  @ApiProperty({example:"objectId"})
  dashboardId: string;

  @ApiProperty({example:"objectId"})
  recipeId: string;

  @ApiProperty({example:"objectId"})
  paramId: string;
}
