import { ApiProperty } from "@nestjs/swagger";


export class CreateMachineDto {
 
    @ApiProperty({example:"Koushal Khajuria"})
    readonly customerName: string;
    
    @ApiProperty({example:"pcb101"})
    readonly machineName: string;
    

}