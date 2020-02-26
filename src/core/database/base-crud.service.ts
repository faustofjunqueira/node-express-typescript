import { createRepository } from 'src/core/database/database.provider';
import { DATABASE_CONNECTION } from './database.provider';
import { Type, Inject } from "@nestjs/common";
import { Repository, Connection } from "typeorm";
import { BaseCrudEntity } from "./base-crud-entity";

/**
 * Options to create service
 *
 * @export
 * @interface BaseCrudServiceOptions
 */
export interface BaseCrudServiceOptions {
  /**
   * If true, the register isn't removed permanently, when the delete operation is performed
   *
   * @type {boolean}
   * @memberof BaseCrudServiceOptions
   */
  softdelete?: boolean;
}

export abstract class BaseCrudService<T extends BaseCrudEntity> {

  /**
   * Repostiory of T class
   *
   * @protected
   * @type {Repository<T>}
   * @memberof BaseCrudService
   */
  protected repository: Repository<T>;

  @Inject(DATABASE_CONNECTION)
  private databaseConnection: Connection;

  constructor(private readonly entityClass: Type<T>) {
    this.repository = this.databaseConnection.getRepository(entityClass)
  }

  // listAll
  // getById
  // deleteById
  // update
  // create

}
