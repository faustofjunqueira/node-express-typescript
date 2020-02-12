import { HttpError } from './HttpError';

/**
 * If the requested resource will not found
 *
 * @export
 * @class NotFoundError
 * @extends {HttpError}
 */
export class NotFoundError extends HttpError {
  public name: string = NotFoundError.name;

  /**
   * Creates an instance of NotFoundError.
   * @param {string} message
   * @param {*} [data]
   * @memberof NotFoundError
   */
  constructor(message: string, public data?: any) {
    super(404, message, data);
  }

}