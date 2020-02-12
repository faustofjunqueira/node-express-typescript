import { HttpError } from './HttpError';
import { ValidationError as CVValidationError } from "class-validator";
/**
 * When a input data broken the validation
 *
 * @export
 * @class ValidationError
 * @extends {HttpError}
 */
export class ValidationError extends HttpError {
  public name: string = ValidationError.name;

  /**
   * Creates an instance of ValidationError.
   * @param {string} message
   * @param {*} [data]
   * @memberof ValidationError
   */
  constructor(public data?: CVValidationError) {
    super(400, 'Validation error', data);
  }

}