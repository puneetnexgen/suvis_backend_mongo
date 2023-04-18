import { Test, TestingModule } from '@nestjs/testing';
import { DashboardParamController } from './dashboard_param.controller';
import { DashboardParamService } from './dashboard_param.service';

describe('DashboardParamController', () => {
  let controller: DashboardParamController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DashboardParamController],
      providers: [DashboardParamService],
    }).compile();

    controller = module.get<DashboardParamController>(DashboardParamController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
