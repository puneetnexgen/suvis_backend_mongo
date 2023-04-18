import { PartialType } from '@nestjs/swagger';
import { CreateDashboardParamDto } from './create-dashboard_param.dto';

export class UpdateDashboardParamDto extends PartialType(CreateDashboardParamDto) {}
