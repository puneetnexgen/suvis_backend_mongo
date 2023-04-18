import { Injectable } from '@nestjs/common';
import { CreateParameterDto } from './dto/create-parameter.dto';
import { UpdateParameterDto } from './dto/update-parameter.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Parameter } from './schemas/parameters.schema';
import { Model } from 'mongoose';

@Injectable()
export class ParametersService {

  constructor(@InjectModel("Parameter") private parametersModel: Model<Parameter>){}

  async create(createParameterDto: CreateParameterDto) {
    const newParameters = new this.parametersModel({...createParameterDto})
    return await newParameters.save()
  }

  
  async findByRecipeId(recipeId:number){
    return this.parametersModel.find({recipeId})
  }

  findAll() {
    return `This action returns all parameters`;
  }

  findOne(id: number) {
    return `This action returns a #${id} parameter`;
  }

  update(id: number, updateParameterDto: UpdateParameterDto) {
    return `This action updates a #${id} parameter`;
  }

  remove(id: number) {
    return `This action removes a #${id} parameter`;
  }
}
