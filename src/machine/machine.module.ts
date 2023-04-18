import { Module } from '@nestjs/common';
import { MachineService } from './machine.service';
import { MachineController } from './machine.controller';
import { Machine, MachineSchema } from './schemas/machine.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { RecipeModule } from 'src/recipe/recipe.module';
import { ParametersModule } from 'src/parameters/parameters.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: Machine.name, schema: MachineSchema }])],
  controllers: [MachineController],
  providers: [MachineService],
  exports: [MachineService]
})
export class MachineModule {}
