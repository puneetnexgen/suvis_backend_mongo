import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DashboardParamService } from './dashboard_param.service';
import { CreateDashboardParamDto } from './dto/create-dashboard_param.dto';
import { UpdateDashboardParamDto } from './dto/update-dashboard_param.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('dashboard-param')
@ApiTags("Dashboard Param")
export class DashboardParamController {
  constructor(private readonly dashboardParamService: DashboardParamService) {}

  @Post()
  create(@Body() createDashboardParamDto: CreateDashboardParamDto) {
    return this.dashboardParamService.create(createDashboardParamDto);
  }

  @Post("data")
  findAll(@Body() dashIdArray: string[]) {
    return this.dashboardParamService.findDashParamData(dashIdArray);
  }


}
