import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";


export class CreateMachineDto {

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    @ApiProperty({example:"Suvi"})
    readonly machineToken: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({example:"Koushal Khajuria"})
    readonly customerName: string;
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty({example:"pcb101"})
    readonly machineName: string;

}