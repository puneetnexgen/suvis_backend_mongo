import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateDashboardDto } from './create-dashboard.dto';

export class UpdateDashboardDto {

    
  @ApiProperty({example: "dashboard_1"})
  dashboardName: string;

  @ApiProperty({example: 1})
  loc_x: number;

  @ApiProperty({example: 2})
  loc_y: number;

  @ApiProperty({example: 3})
  size_x: number;

  @ApiProperty({example: 4})
  size_y: number;
}
