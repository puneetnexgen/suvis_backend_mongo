import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDashboardDto } from './dto/create-dashboard.dto';
import { UpdateDashboardDto } from './dto/update-dashboard.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Dashboard } from './schemas/dashboard.schema';
import { Model } from 'mongoose';

@Injectable()
export class DashboardService {

  constructor(@InjectModel(Dashboard.name) private dashboardModel: Model<Dashboard>){}

  async create(createDashboardDto: CreateDashboardDto) {
    const createDashboard = new this.dashboardModel(createDashboardDto)
    return await createDashboard.save()
  }

  findAll() {
    return this.dashboardModel.find()
  }

  findById(id: string) {
    return this.dashboardModel.findById(id).exec();
  }

  update(id: string, updateDashboardDto: UpdateDashboardDto) {
    return this.dashboardModel.findByIdAndUpdate(id, updateDashboardDto, {new:true})
  }

  async remove(id: string) {
    const deleted = await this.dashboardModel.findByIdAndDelete(id).exec();
    console.log(deleted)
    if(!deleted){
      throw new NotFoundException(`Dashboard with id ${id} does not exist`)
    }
    return deleted
  }
}
