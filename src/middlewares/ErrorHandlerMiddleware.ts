import { ExpressErrorMiddlewareInterface, Middleware } from "routing-controllers";
import { InternalServerError } from '../errors/InternalServerError';
import { Request, Response, NextFunction } from 'express';
import { HttpError } from '../errors/HttpError';

/**
 * Interface which represents error response for http request
 *
 * @export
 * @interface HttpErrorResponseData
 */
export interface HttpErrorResponseData {
  message: string,
  data?: any
}

@Middleware({ type: "after" })
export class ErrorHandlerMiddleware implements ExpressErrorMiddlewareInterface { // interface implementation is optional

  /**
   * Check if error is HttpError
   *
   * @private
   * @param {*} error
   * @returns {error is HttpError}
   * @memberof ErrorHandlerMiddleware
   */
  private isHttpError(error: any): error is HttpError {
    return error instanceof HttpError;
  }

  /**
   * Create a standard response format
   *
   * @private
   * @param {HttpError} error
   * @memberof ErrorHandlerMiddleware
   */
  private applyResponseFormat(error: HttpError): HttpErrorResponseData {
    const data: HttpErrorResponseData = { message: error.message };
    if (error.data) {
      data.data = error.data;
    }
    return data;
  }

  /**
   * Interface implementation
   *
   * @param {*} error
   * @param {Request} _
   * @param {Response} response
   * @param {NextFunction} [next]
   * @memberof ErrorHandlerMiddleware
   */
  public error(error: any, _: Request, response: Response, next?: NextFunction): void {
    let httpError: HttpError = this.isHttpError(error) ? error : new InternalServerError;
    const json = this.applyResponseFormat(httpError);

    response
      .header('Content-type', 'application/json')
      .status(httpError.status)
      .json(json);

    if (next) {
      next(error);
    }
  }

}