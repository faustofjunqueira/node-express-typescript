import { Test, TestingModule } from '@nestjs/testing';
import { PaginateFactory } from './paginate-factory';

describe('PaginateBuilder', () => {
  let provider: PaginateFactory;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaginateFactory],
    }).compile();

    provider = module.get<PaginateFactory>(PaginateFactory);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
