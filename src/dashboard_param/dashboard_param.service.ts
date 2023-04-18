import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDashboardParamDto } from './dto/create-dashboard_param.dto';
import { UpdateDashboardParamDto } from './dto/update-dashboard_param.dto';
import { InjectModel } from '@nestjs/mongoose';
import { DashboardParam } from './schemas/dashboard_param.schema';
import { Model } from 'mongoose';
import { RecipeService } from 'src/recipe/recipe.service';
import { ParametersService } from 'src/parameters/parameters.service';
import { DashboardService } from 'src/dashboard/dashboard.service';

@Injectable()
export class DashboardParamService {

  constructor(
    @InjectModel(DashboardParam.name) private dashboardParamModel: Model<DashboardParam>,
    private dashboardService: DashboardService,
    private recipeService: RecipeService,
    private parametersService: ParametersService
  ){}

  async create(createDashboardParamDto: CreateDashboardParamDto) {

    const findDashboard = await this.dashboardService.findById(createDashboardParamDto.dashboardId)
    const findRecipe = await this.recipeService.findById(createDashboardParamDto.recipeId)
    const findParameters =await this.parametersService.findById(createDashboardParamDto.paramId)
    console.log(findDashboard, findRecipe, findParameters)

    if(!findDashboard || !findRecipe || !findParameters){
      throw new NotFoundException("Please enter a valid Id")
    }
    const createDashParam = new this.dashboardParamModel(createDashboardParamDto)
    return await createDashParam.save()
  }

  async findDashParamData(dashIdArray:string[]){
    for (let i in dashIdArray){
      const findDashParam = await this.dashboardParamModel.findById(dashIdArray[0])
      const findDashboardData = await this.dashboardService.findById(findDashParam.dashboardId)
      const findRecipeData = await this.recipeService.findById(findDashParam.recipeId)
      const findParametersData = await this.parametersService.findById(findDashParam.paramId)
      return {findDashParam, findDashboardData,findRecipeData, findParametersData}
    }
  
}
}

