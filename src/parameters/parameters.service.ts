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

   async findById(id: string) {
    return await this.parametersModel.aggregate([{ $unwind: '$values' }])
  }

  async findByRecipeId(recipeId:string){
    return await this.parametersModel.find({recipeId})
  }

}
