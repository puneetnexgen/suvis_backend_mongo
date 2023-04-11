import { PartialType } from '@nestjs/swagger';
import { CreateParameterSettingDto } from './create-parameter_setting.dto';

export class UpdateParameterSettingDto extends PartialType(CreateParameterSettingDto) {}
