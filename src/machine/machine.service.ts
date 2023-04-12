import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateMachineDto } from "./dto/create-machine.dto";
import { UpdateMachineDto } from "./dto/update-machine.dto";
import { Imachine } from "./interface/machine.interface";
import { RecipeService } from "src/recipe/recipe.service";
import { ParametersService } from "src/parameters/parameters.service";
import { ParameterSettingsService } from "src/parameter_settings/parameter_settings.service";
import { CreateParameterSettingDto } from "src/parameter_settings/dto/create-parameter_setting.dto";
import { CreateMainDto } from "./dto/main.dto";
import { create } from "domain";

@Injectable()
export class MachineService {
  constructor(
    @InjectModel('Machine') private machineModel:Model<Imachine>,
    private recipeService: RecipeService,
    private parametersService: ParametersService,
    private parameterSettingsService: ParameterSettingsService
  ) { }

 
  async createMachine(createMainDto: CreateMainDto[]) {
    for (let i in createMainDto){
      const {machineToken, recipeName, param, timeStamp, type, value } = createMainDto[i];
  
      let findMachine = await this.machineModel.findOne({machineToken});
      let machineId;
      if (!findMachine){
        const lastUser = await this.machineModel.findOne().sort({ id: -1 }).exec();
        const nextId = lastUser ? lastUser.id + 1 : 1;
        const newMachine = new this.machineModel({id: nextId, machineToken});
        const createdMachine = await newMachine.save();
        machineId = createdMachine.id;
      }else{
        machineId = findMachine.id
      }
    
      const findRecipe =  await this.recipeService.findByRecipe(recipeName);
      let recipeId;
      if(!findRecipe){
        const createdRecipe = await this.recipeService.create({machineId, recipeName});
        recipeId = createdRecipe.id;
      }else{
        recipeId = findRecipe.id;
      }

      const findParamerSettings = await this.parameterSettingsService.findByParameterSetting(param);
      let parameterSettingId;
      if(!findParamerSettings){
        const createdParameterSettings = await this.parameterSettingsService.create({machineId, param, type, timeStamp});
        parameterSettingId = createdParameterSettings.id;
      }
      else{
        parameterSettingId = findParamerSettings.id
      }
      
      let sVal, bVal, fVal;
      if (type == 'string'){
         sVal = value
      }
      if (type == 'boolean'){
         bVal = value
      }
      if (type == 'number'){
         fVal = value
      }
      const createdParameters = await this.parametersService.create({machineId, recipeId, parameterSettingId, sVal, bVal, fVal, timeStamp})
    }
    return "Machine Data Inserted"
  }

  async updateMachine(machineId: string, updateMachineDto: UpdateMachineDto): Promise<Imachine> {
    const existingMachine = this.machineModel.findByIdAndUpdate(machineId, updateMachineDto, { new: true });
   if (!existingMachine) {
     throw new NotFoundException(`machine #${machineId} not found`);
   }
   return existingMachine;
  }

  async getAllMachines(): Promise<Imachine[]> {
    const machineData = await this.machineModel.find({});
    if (!machineData || machineData.length == 0) {
        throw new NotFoundException('machines data not found!');
    }
    return machineData;
  }

  async getMachine(machineId: string): Promise<Imachine> {
    const existingMachine = await this.machineModel.findById(machineId).exec();
    if (!existingMachine) {
     throw new NotFoundException(`machine #${machineId} not found`);
    }
    return existingMachine;
  }
}