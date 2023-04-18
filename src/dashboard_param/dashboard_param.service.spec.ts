import { Test, TestingModule } from '@nestjs/testing';
import { DashboardParamService } from './dashboard_param.service';

describe('DashboardParamService', () => {
  let service: DashboardParamService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DashboardParamService],
    }).compile();

    service = module.get<DashboardParamService>(DashboardParamService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
