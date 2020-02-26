import { PrimaryGeneratedColumn } from "typeorm";

export abstract class BaseEntity {

  /**
   * All table should have a unique column as ID (primary key).
   * Then, we recommend that you have a ID column as uuid type.
   *
   * @type {string}
   * @memberof BaseEntity
   */
  @PrimaryGeneratedColumn("uuid")
  id: string
}
