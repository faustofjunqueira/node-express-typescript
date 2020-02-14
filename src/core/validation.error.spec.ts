import { ValidationExcetion } from './validation.exception';

describe('ValidationExcetion', () => {
  it('should be defined', () => {
    expect(new ValidationExcetion()).toBeDefined();
  });
});
