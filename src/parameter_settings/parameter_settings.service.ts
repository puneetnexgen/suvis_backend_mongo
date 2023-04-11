import { Injectable } from '@nestjs/common';
import { CreateParameterSettingDto } from './dto/create-parameter_setting.dto';
import { UpdateParameterSettingDto } from './dto/update-parameter_setting.dto';

@Injectable()
export class ParameterSettingsService {
  create(createParameterSettingDto: CreateParameterSettingDto) {
    return 'This action adds a new parameterSetting';
  }

  findAll() {
    return `This action returns all parameterSettings`;
  }

  findOne(id: number) {
    return `This action returns a #${id} parameterSetting`;
  }

  update(id: number, updateParameterSettingDto: UpdateParameterSettingDto) {
    return `This action updates a #${id} parameterSetting`;
  }

  remove(id: number) {
    return `This action removes a #${id} parameterSetting`;
  }
}
