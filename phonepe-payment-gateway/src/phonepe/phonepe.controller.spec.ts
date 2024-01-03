import { Test, TestingModule } from '@nestjs/testing';
import { PhonepeController } from './phonepe.controller';

describe('PhonepeController', () => {
  let controller: PhonepeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhonepeController],
    }).compile();

    controller = module.get<PhonepeController>(PhonepeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
