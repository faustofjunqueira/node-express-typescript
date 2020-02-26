import { BaseCrudEntity } from './base-crud-entity';

describe('BaseModel', () => {
  it('should be defined', () => {
    expect(new BaseCrudEntity()).toBeDefined();
  });
});
