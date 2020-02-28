import { FormFilter } from './form-filter';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Paginate } from './paginate';

/**
 * Create paginate
 *
 * @export
 * @class PaginateBuilder
 */
@Injectable()
export class PaginateFactory {

  /**
   * Create pagination
   *
   * @template T
   * @param {Repository<T>} repository
   * @param {FormFilter} formfilter
   * @returns {Promise<Paginate<T>>}
   * @memberof PaginateFactory
   */
  async paginate<T>(repository: Repository<T>, formfilter: FormFilter): Promise<Paginate<T>> {
    const [page, total] = await repository.findAndCount(formfilter.filter());
    return new Paginate(page, total);
  }

}
