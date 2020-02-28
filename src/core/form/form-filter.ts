import { FindManyOptions } from "typeorm";
import { IsOptional, IsNumber, Min, Max, IsObject } from "class-validator";

/**
 * Order reigster in pagination
 *
 * @export
 * @interface FormFilterOrder
 */
export interface FormFilterOrder {
  [field: string]: "ASC" | "DESC"
}

/**
 *
 *
 * @export
 * @class Form
 */
export abstract class FormFilter {

  private static DEFAULT_LIMIT: number = 10;
  private static DEFAULT_OFFSET: number = 0;

  /**
   * Order by fields
   *
   * @type {FormOrder}
   * @memberof Form
   */
  @IsOptional()
  @IsObject()
  order?: FormFilterOrder;

  /**
   * Limit of register in page
   *
   * @type {number}
   * @memberof Form
   */
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(60)
  limit?: number;

  /**
   * Offset of register to take register for page
   *
   * @type {number}
   * @memberof Form
   */
  @IsOptional()
  @IsNumber()
  @Min(0)
  offset?: number;

  /**
   * Create filter object
   *
   * @template T
   * @returns {FindManyOptions<T>}
   * @memberof FormFilter
   */
  filter<T>(): FindManyOptions<T> {
    const filter: FindManyOptions<T> = {
      where: this.where()
    }

    if(this.order) {
      filter.order = this.order as any
    }

    filter.take = this.limit || FormFilter.DEFAULT_LIMIT;
    filter.skip = this.offset = FormFilter.DEFAULT_OFFSET;

    return filter;
  }

  /**
   * Where object
   *
   * @abstract
   * @returns {*}
   * @memberof FormFilter
   */
  abstract where(): any;
}
