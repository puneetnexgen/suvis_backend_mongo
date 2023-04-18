import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, HttpStatus, Res } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { machine } from 'os';
import { response } from 'express';

@Controller('recipe')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  // @Post()
  // create(@Body() createRecipeDto: CreateRecipeDto) {
  //   return this.recipeService.create(createRecipeDto);
  // }

  @Get()
  async findAll(@Res() response) {
    try{
      const findRecipes = await this.recipeService.findAll();
      return response.status(HttpStatus.OK).json({
        message: "Recipe Data", findRecipes
      })
    } catch(err){
      return response.status(err.status).json(err.response)
    }
  }

  @Get(':token')
  async findOne(@Param("token") machineToken: string, @Res() response) {
    try{
      const recipeDataByMachineToken = await this.recipeService.findOneByMachineToken(machineToken)
      return response.status(HttpStatus.OK).json({
        message: "Recipe Data fetched through Machine token", recipeDataByMachineToken
      })  
    }catch(err){
      return response.status(err.status).json(err.response)
    }
    
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateRecipeDto: UpdateRecipeDto) {
    return await this.recipeService.update(+id, updateRecipeDto, );
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.recipeService.remove(+id);
  // }
}
