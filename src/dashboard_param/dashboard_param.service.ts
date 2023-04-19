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

    if(!findDashboard || !findRecipe || !findParameters){
      throw new NotFoundException("Please enter a valid Id")
    }
    const createDashParam = new this.dashboardParamModel(createDashboardParamDto)
    return await createDashParam.save()
  }

  async findDashParamData(dashIdArray:string[]){
    let arr = []
    for (let i in dashIdArray){
      const findDashParam = await this.dashboardParamModel.find({dashboardId:dashIdArray[i]})
      if(!findDashParam.length){
        throw new NotFoundException(`Id ${dashIdArray[i]} is not a valid dashboard Id`)
      }

      const findDashboard = await this.dashboardService.findById(dashIdArray[i])
      for (let i in findDashParam){
        const findRecipeData = await this.recipeService.findById(findDashParam[i].recipeId)
        const findParametersData = await this.parametersService.findById(findDashParam[i].paramId)
        arr.push({dash_data:findDashboard, recipe_data: findRecipeData, param_data:findParametersData })
      }
    }
    return arr;
  
}
}

