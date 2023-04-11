import { Test, TestingModule } from '@nestjs/testing';
import { ParameterSettingsController } from './parameter_settings.controller';
import { ParameterSettingsService } from './parameter_settings.service';

describe('ParameterSettingsController', () => {
  let controller: ParameterSettingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParameterSettingsController],
      providers: [ParameterSettingsService],
    }).compile();

    controller = module.get<ParameterSettingsController>(ParameterSettingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
