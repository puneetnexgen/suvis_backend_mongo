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
    // const lastUser =await this.recipeModel.findOne().sort({ id: -1 }).exec();
    // const nextId = lastUser ? lastUser.id + 1 : 1;
    const newRecipe = new this.recipeModel({...createRecipeDto});
    const created =await newRecipe.save()
    return created;
  }

  findAll() {
    return this.recipeModel.find().exec();
  }

  async findOneByMachineToken(machineToken: string) {
    const findMachineDataByMachineToken = await this.machineService.findByMachineToken(machineToken);
    const findRecipeByMachineToken = await this.recipeModel.find({machineId:findMachineDataByMachineToken.id}).exec();
    return findRecipeByMachineToken;
  }

  findByRecipe(recipeName:any){
    return this.recipeModel.findOne({recipeName})
  }

  async update(id: number, updateRecipeDto: UpdateRecipeDto) {
    return await this.recipeModel.findOneAndUpdate({id}, updateRecipeDto, {new:true}).exec();
  }

  remove(id: number) {
    return `This action removes a #${id} recipe`;
  }
}
