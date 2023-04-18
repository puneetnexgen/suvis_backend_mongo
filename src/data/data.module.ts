import { Module } from '@nestjs/common';
import { DataService } from './data.service';
import { DataController } from './data.controller';
import { RecipeModule } from 'src/recipe/recipe.module';
import { ParametersModule } from 'src/parameters/parameters.module';
import { MachineModule } from 'src/machine/machine.module';

@Module({
  imports:[ RecipeModule, ParametersModule, MachineModule],
  controllers: [DataController],
  providers: [DataService]
})
export class DataModule {}
