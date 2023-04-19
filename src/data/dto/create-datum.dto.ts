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

  @ApiProperty({type:[NestedObject]})
  readonly values: NestedObject[];

}

export class CreateDatumArrayDto{
  @ApiProperty({ type: [CreateDatumDto] })
  createDatumDto: CreateDatumDto[];
}