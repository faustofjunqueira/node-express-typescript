import { BaseEntity } from './base-entity';

describe('BaseModel', () => {
  it('should be defined', () => {
    expect(new BaseEntity()).toBeDefined();
  });
});
