import { Module } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { DashboardController } from './dashboard.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Dashboard, DashboardSchema } from './schemas/dashboard.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Dashboard.name, schema: DashboardSchema}])],
  controllers: [DashboardController],
  providers: [DashboardService],
  exports: [DashboardService]
})
export class DashboardModule {}
