import { Module } from '@nestjs/common';
import { ParameterSettingsService } from './parameter_settings.service';
import { ParameterSettingsController } from './parameter_settings.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ParameterSetting, ParameterSettingsSchema } from './schemas/parameter_settings.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: ParameterSetting.name, schema: ParameterSettingsSchema}])],
  controllers: [ParameterSettingsController],
  providers: [ParameterSettingsService],
  exports: [ParameterSettingsService]
})
export class ParameterSettingsModule {}
