import { Type } from "@nestjs/common";
import { Connection, ConnectionOptions, createConnection } from "typeorm";
import { BaseEntity } from './base-entity';
import config = require('config');
import path = require('path');

const databaseConnectionProviderName = 'DATABASE_CONNECTION';

export const databaseProvider = [
  {
    provider: databaseConnectionProviderName,
    useFactory: async () => await createConnection({
      ...config.get('database') as ConnectionOptions,
      // Load all entities's paths relative over src folder
      entities: (config.get('database.entities') as string[]).map((entitiespath: string) => path.resolve(__dirname, '../..', entitiespath))
    }),
  }
]

/**
 * Create name of repository provider
 *
 * @param {Type<BaseEntity>} entityClass
 */
export function getRepository<T extends BaseEntity>(entityClass: Type<T>) {
  return `${entityClass.name.toUpperCase()}_REPOSITORY`;
}


/**
 * Create repository provider
 *
 * @export
 * @template T
 * @param {Type<T>} entityClass
 * @returns Provider of repository
 * @example
 *  const exampleRepository = createRepository(Example)
 *
 */
export function createRepository<T extends BaseEntity>(entityClass: Type<T>) {
  return {
    provide: getRepository(entityClass),
    useFactory: (connection: Connection) => connection.getRepository(entityClass),
    inject: [databaseConnectionProviderName]
  }
}
