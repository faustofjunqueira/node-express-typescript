import { HttpError } from './HttpError';

/**
 * Not implemented function
 *
 * @export
 * @class NotImplementedError
 * @extends {HttpError}
 */
export class NotImplementedError extends HttpError {
  public name: string = NotImplementedError.name;

  /**
   * Creates an instance of NotImplementedError.
   * @param {string} message
   * @memberof NotImplementedError
   */
  constructor(message: string) {
    super(501, message);
  }

}