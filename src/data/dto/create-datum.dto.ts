import { ApiProperty } from "@nestjs/swagger";

export class NestedObject{

  @ApiProperty({example:"Milk"})
  paramName: string;

  @ApiProperty({example:"Sumkmcdvi"})
  value: any;

  @ApiProperty({example:"18-10-2000T18:00:00"})
  timeStamp: string;
}


export class CreateDatumDto {

  @ApiProperty({example:"Suvi"})
  readonly machineToken: string;

  @ApiProperty({example:"Coffee"})
  readonly recipeName: string;

  // @ApiProperty({example:"Milk"})
  // readonly param: string;

  // @ApiProperty({example:"0"})
  // readonly type: string;

  @ApiProperty({example:"242"})
  readonly values: NestedObject[];

  // @ApiProperty({example:"3-21-2018T11:14:23.11"})
  // readonly timeStamp: string;

}

export class CreateDatumArrayDto{
  @ApiProperty({ type: [CreateDatumDto] }) // Use 'type' option to specify array type
  createDatumDto: CreateDatumDto[];
}