import { HttpException, HttpStatus } from "@nestjs/common";
import { ValidationError } from 'class-validator';

/**
 * Validation data error
 *
 * @export
 * @class ValidationExcetion
 * @extends {BadRequestException}
 */
export class ValidationExcetion extends HttpException {

  /**
   * Creates an instance of ValidationExcetion.
   * @param {ValidationError[]} data
   * @memberof ValidationExcetion
   */
  constructor(public data: ValidationError[]) {
    super({ data, }, HttpStatus.BAD_REQUEST);
  }
}
