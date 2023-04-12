import { ApiProperty } from "@nestjs/swagger";
import { TypeEnum } from "../schemas/parameter_settings.schema";

export class CreateParameterSettingDto {
  
  @ApiProperty()
  machineId: number;
  
  @ApiProperty()
  param: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  timeStamp: string;
}
