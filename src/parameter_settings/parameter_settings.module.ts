import { Module } from '@nestjs/common';
import { ParameterSettingsService } from './parameter_settings.service';
import { ParameterSettingsController } from './parameter_settings.controller';

@Module({
  controllers: [ParameterSettingsController],
  providers: [ParameterSettingsService]
})
export class ParameterSettingsModule {}
