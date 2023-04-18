import { Controller, Get, Post, Body, Patch, Param, Delete, Res, BadRequestException } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { CreateDashboardDto } from './dto/create-dashboard.dto';
import { UpdateDashboardDto } from './dto/update-dashboard.dto';
import { ApiTags } from '@nestjs/swagger';
import { response } from 'express';
import { BADQUERY } from 'dns';

@Controller('dashboard')
@ApiTags("Dashboard")
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Post()
  create(@Body() createDashboardDto: CreateDashboardDto) {
     return this.dashboardService.create(createDashboardDto)
  }

  @Get()
  findAll() {
    return this.dashboardService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDashboardDto: UpdateDashboardDto) {
    return this.dashboardService.update(id, updateDashboardDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const deleteDashboard =  await this.dashboardService.remove(id);
    return `Successfully Deleted Dashboard with id ${id}`
  }
}
