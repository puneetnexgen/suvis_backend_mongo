import { Injectable } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Recipe } from './schemas/recipe.schema';
import { Model } from 'mongoose';
import { last } from 'rxjs';
import { MachineService } from 'src/machine/machine.service';

@Injectable()
export class RecipeService {
  constructor(
    @InjectModel("Recipe") private recipeModel: Model<Recipe>,
    private machineService: MachineService
    ){}


  async create(createRecipeDto: CreateRecipeDto) {
    const newRecipe = new this.recipeModel({...createRecipeDto});
    const created =await newRecipe.save()
    return created;
  }

  findAll() {
    return this.recipeModel.find().exec();
  }

  async findByMachineToken(machineToken: string) {
    const findMachineDataByMachineToken = await this.machineService.findByMachineToken(machineToken);
    const findRecipeByMachineToken = await this.recipeModel.find({machineId:findMachineDataByMachineToken.id}).exec();
    return findRecipeByMachineToken;
  }

  findById(id: string) {
    return this.recipeModel.findById(id).exec();
  }

  findByRecipe(recipeName:any){
    return this.recipeModel.findOne({recipeName})
  }

  async update(id: string, updateRecipeDto: UpdateRecipeDto) {
    return await this.recipeModel.findByIdAndUpdate(id, updateRecipeDto, {new:true}).exec();
  }

}
