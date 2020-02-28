import { createRepository } from 'src/core/database/database.provider';
import { Example } from './example.entity';


export const exampleProviders = [
  /**
   * Here, you can add all integrations, and another datasource
   */
  createRepository(Example)
];
