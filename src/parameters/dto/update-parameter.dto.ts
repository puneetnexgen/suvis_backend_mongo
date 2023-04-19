import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateParameterDto } from './create-parameter.dto';

class NestedObject{

    @ApiProperty({example:"Milk"})
    paramName: string;
  
    @ApiProperty({example:"Sumkmcdvi"})
    value: any;
  
  }

export class UpdateParameterDto {
  
    @ApiProperty({type:[NestedObject]})
    readonly values: NestedObject[];
}
