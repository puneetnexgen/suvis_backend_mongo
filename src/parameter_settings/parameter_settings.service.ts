import { Injectable } from '@nestjs/common';
import { CreateParameterSettingDto } from './dto/create-parameter_setting.dto';
import { UpdateParameterSettingDto } from './dto/update-parameter_setting.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ParameterSetting } from './schemas/parameter_settings.schema';

@Injectable()
export class ParameterSettingsService {
  constructor(@InjectModel('ParameterSetting') private parameterSettingsModel: Model<ParameterSetting>){}

  async create(createParameterSettingDto: CreateParameterSettingDto) {
    const lastUser = await this.parameterSettingsModel.findOne().sort({id:-1}).exec();
    const nextId = lastUser ? lastUser.id + 1: 1;
    const newParameterSettings = new this.parameterSettingsModel({id:nextId, ...createParameterSettingDto});
    return await newParameterSettings.save()
  }

  findByParameterSetting(param: any){
    return this.parameterSettingsModel.findOne({param})
  }

  // findAll() {
  //   return `This action returns all parameterSettings`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} parameterSetting`;
  // }

  // update(id: number, updateParameterSettingDto: UpdateParameterSettingDto) {
  //   return `This action updates a #${id} parameterSetting`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} parameterSetting`;
  // }
}
