import { Injectable } from '@nestjs/common';
import { CreateDatumArrayDto, CreateDatumDto } from './dto/create-datum.dto';
import { UpdateDatumDto } from './dto/update-datum.dto';
import { RecipeService } from "src/recipe/recipe.service";
import { ParametersService } from "src/parameters/parameters.service";
import { MachineService } from 'src/machine/machine.service';

@Injectable()
export class DataService {
  constructor(
    private machineService: MachineService,
    private recipeService: RecipeService,
    private parametersService: ParametersService
    ){}

  async create(createDatumDto: CreateDatumArrayDto) {
    for (let i in createDatumDto){
      const {machineToken, recipeName, values } = createDatumDto[i];
  
      
      let findMachine = await this.machineService.findByMachineToken(machineToken);
      let machineId;
      if (!findMachine){
        const createdMachine = await this.machineService.createMachine({machineToken})
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


      const createdParameters = await this.parametersService.create({machineId, recipeId, values})
      }
    return "Successfully created"
  }
}
