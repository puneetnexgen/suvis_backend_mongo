import { ApiProperty } from "@nestjs/swagger";
import { Timestamp } from "rxjs";


class NestedObject{

  @ApiProperty({example:"Milk"})
  paramName: string;

  @ApiProperty({example:"Sumkmcdvi"})
  value: any;

  @ApiProperty({example:"18-10-2000T18:00:00"})
  timeStamp: string;
}


export class CreateParameterDto {

  @ApiProperty()
  machineId: string;

  @ApiProperty()
  recipeId: string;

  @ApiProperty({type:[NestedObject]})
  readonly values: NestedObject[];

}
