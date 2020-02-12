
/**
 * Primary Http Error
 *
 * @export
 * @class HttpError
 * @extends {RCHttpError}
 */
export class HttpError extends Error {
  
  public name: string = HttpError.name;

  constructor(public status: number, message: string, public data?: any) {
    super(message);
  }
  
}

