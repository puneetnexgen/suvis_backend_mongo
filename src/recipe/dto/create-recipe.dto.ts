import { ApiProperty } from "@nestjs/swagger";

export class CreateRecipeDto {

  @ApiProperty()
  machineId: number;

  @ApiProperty()
  recipeName: string;
  
}
