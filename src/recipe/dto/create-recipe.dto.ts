import { ApiProperty } from "@nestjs/swagger";

export class CreateRecipeDto {

  @ApiProperty()
  machineId: string;

  @ApiProperty()
  recipeName: string;
  
}
