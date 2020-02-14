import { BadRequestException } from "@nestjs/common";
import { ValidationError } from 'class-validator';

/**
 * Validation data error
 *
 * @export
 * @class ValidationExcetion
 * @extends {BadRequestException}
 */
export class ValidationExcetion extends BadRequestException {

  /**
   * Creates an instance of ValidationExcetion.
   * @param {ValidationError[]} data
   * @memberof ValidationExcetion
   */
  constructor(public data: ValidationError[]) {
    super('Validation Data')
  }
}
