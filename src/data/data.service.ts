import { Injectable, NotFoundException } from '@nestjs/common';
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
      if (!findMachine){
        throw new NotFoundException("Enter a Valid Machine Token")
      }
      let machineId = findMachine.id
      


      const findRecipe =  await this.recipeService.findByRecipe(recipeName);
      let recipeId:string;
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
