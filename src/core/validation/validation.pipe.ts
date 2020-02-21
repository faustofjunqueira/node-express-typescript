import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { ValidationExcetion } from './validation.exception';

/**
 * Validation data
 * If broken validation, then thrown Validation Exception (400)
 * @export
 * @class ValidationPipe
 * @implements {PipeTransform}
 */
@Injectable()
export class ValidationPipe implements PipeTransform {
  
  /**
   * Validate data
   *
   * @override
   * @template T
   * @param {T} value
   * @param {ArgumentMetadata} {metatype, type, data}
   * @returns {Promise<T>}
   * @memberof ValidationPipe
   */
  public async transform<T>(value: T, {metatype, type, data}: ArgumentMetadata): Promise<T> {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToClass(metatype, value);
    const errors = await validate(object);
    if (errors.length > 0) {
      throw new ValidationExcetion(errors);
    }
    return value;
  }

  /**
   * Check, whether it's necessary to validate
   *
   * @private
   * @param {Function} metatype
   * @returns {boolean}
   * @memberof ValidationPipe
   */
  private toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
