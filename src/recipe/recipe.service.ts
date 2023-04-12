import { Injectable } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Recipe } from './schemas/recipe.schema';
import { Model } from 'mongoose';
import { last } from 'rxjs';

@Injectable()
export class RecipeService {
  constructor(@InjectModel("Recipe") private recipeModel: Model<Recipe>){}


  async create(createRecipeDto: CreateRecipeDto) {
    const lastUser =await this.recipeModel.findOne().sort({ id: -1 }).exec();
    const nextId = lastUser ? lastUser.id + 1 : 1;
    const newRecipe = new this.recipeModel({id:nextId, ...createRecipeDto});
    const created =await newRecipe.save()
    return created;
  }

  findAll() {
    return `This action returns all recipe`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recipe`;
  }

  findByRecipe(recipeName:any){
    return this.recipeModel.findOne({recipeName})
  }

  update(id: number, updateRecipeDto: UpdateRecipeDto) {
    return `This action updates a #${id} recipe`;
  }

  remove(id: number) {
    return `This action removes a #${id} recipe`;
  }
}
