import { Module } from '@nestjs/common';
import { MachineService } from './machine.service';
import { MachineController } from './machine.controller';
import { Machine, MachineSchema } from './schemas/machine.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { RecipeModule } from 'src/recipe/recipe.module';
import { ParametersModule } from 'src/parameters/parameters.module';
import { ParameterSettingsModule } from 'src/parameter_settings/parameter_settings.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: Machine.name, schema: MachineSchema }]),
  RecipeModule, ParametersModule, ParameterSettingsModule],
  controllers: [MachineController],
  providers: [MachineService]
})
export class MachineModule {}
