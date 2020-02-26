import { Test, TestingModule } from '@nestjs/testing';
import { Example } from './example.entity';

describe('Example', () => {
  let provider: Example;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Example],
    }).compile();

    provider = module.get<Example>(Example);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
