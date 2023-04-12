import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";
import { TypeEnum } from "src/parameter_settings/schemas/parameter_settings.schema";


export class CreateMachineDto {
 
    @ApiProperty({example:"Suvi"})
    readonly machineToken: string;
    
    @ApiProperty({example:"Koushal Khajuria"})
    readonly customerName?: string;
    
    @ApiProperty({example:"pcb101"})
    readonly machineName?: string;
    

}