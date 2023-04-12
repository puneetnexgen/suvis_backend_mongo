import { Module } from '@nestjs/common';
import { ParametersService } from './parameters.service';
import { ParametersController } from './parameters.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Parameter, ParametersSchema } from './schemas/parameters.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Parameter.name, schema: ParametersSchema}])],
  controllers: [ParametersController],
  providers: [ParametersService],
  exports: [ParametersService]
})
export class ParametersModule {}
