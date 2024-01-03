import { Test, TestingModule } from '@nestjs/testing';
import { PhonepeHelperService } from './phonepe-helper.service';

describe('PhonepeHelperService', () => {
  let service: PhonepeHelperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhonepeHelperService],
    }).compile();

    service = module.get<PhonepeHelperService>(PhonepeHelperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
