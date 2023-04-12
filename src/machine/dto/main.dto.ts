import { ApiProperty } from "@nestjs/swagger";
import { TypeEnum } from "src/parameter_settings/schemas/parameter_settings.schema";

export class CreateMainDto {

  @ApiProperty({example:"Suvi"})
  readonly machineToken: string;

  @ApiProperty({example:"Coffee"})
  readonly recipeName: string;

  @ApiProperty({example:"Milk"})
  readonly param: string;

  @ApiProperty({example:"0"})
  readonly type: string;

  @ApiProperty({example:"242"})
  readonly value: boolean | number | string;

  @ApiProperty({example:"3-21-2018T11:14:23.11"})
  readonly timeStamp: string;

}