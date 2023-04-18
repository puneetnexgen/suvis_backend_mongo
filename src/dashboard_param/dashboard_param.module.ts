import { Module } from '@nestjs/common';
import { DashboardParamService } from './dashboard_param.service';
import { DashboardParamController } from './dashboard_param.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DashboardParam, DashboardParamSchema } from './schemas/dashboard_param.schema';
import { RecipeModule } from 'src/recipe/recipe.module';
import { DashboardModule } from 'src/dashboard/dashboard.module';
import { ParametersModule } from 'src/parameters/parameters.module';

@Module({
  imports: [MongooseModule.forFeature([{name: DashboardParam.name, schema: DashboardParamSchema}]), 
  ParametersModule, DashboardModule, RecipeModule],
  controllers: [DashboardParamController],
  providers: [DashboardParamService]
})
export class DashboardParamModule {}
