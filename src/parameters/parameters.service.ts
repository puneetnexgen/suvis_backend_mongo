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

    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      const paramData =  await this.parametersModel.findOne({"values._id": id},{"values.$":1})
      return paramData.values[0]
  }

    return null;

  }

  async findByRecipeId(recipeId:string){
    return await this.parametersModel.find({recipeId})
  }
}
