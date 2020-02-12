import { HttpError } from './HttpError';

/**
 * Internal Error of Application. Generic error
 *
 * @export
 * @class InternalServerError
 * @extends {HttpError}
 */
export class InternalServerError extends HttpError {
  public name: string = InternalServerError.name;

  
  constructor(message: string='Occurs a internal server error') {
    super(500, message);
  }

}