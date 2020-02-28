
/**
 * Represent a page
 *
 * @export
 * @class Paginate
 * @template T
 */
export class Paginate<T> {

  /**
   * Total register of database
   *
   * @type {number}
   * @memberof Paginate
   */
  total: number;

  /**
   * Page data list
   *
   * @type {T[]}
   * @memberof Paginate
   */
  page: T[];

  constructor(page: T[], total: number) {
    this.page = page;
    this.total = total;
  }

}
