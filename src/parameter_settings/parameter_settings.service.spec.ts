import { Test, TestingModule } from '@nestjs/testing';
import { ParameterSettingsService } from './parameter_settings.service';

describe('ParameterSettingsService', () => {
  let service: ParameterSettingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParameterSettingsService],
    }).compile();

    service = module.get<ParameterSettingsService>(ParameterSettingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
