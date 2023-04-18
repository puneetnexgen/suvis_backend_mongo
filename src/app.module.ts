import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MachineModule } from './machine/machine.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MachineSchema } from './machine/schemas/machine.schema';
import { RecipeModule } from './recipe/recipe.module';
import { ParametersModule } from './parameters/parameters.module';
import { DataModule } from './data/data.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardParamModule } from './dashboard_param/dashboard_param.module';

@Module({
  imports: [MachineModule, 
    MongooseModule.forRoot('mongodb://0.0.0.0:27017',{dbName:'suvi'}), RecipeModule, ParametersModule, DataModule, DashboardModule, DashboardParamModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
