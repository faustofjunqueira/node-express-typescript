import { createRepository } from 'src/core/database/database.provider';
import { Example } from './example.entity';


export const exampleProviders = [
  createRepository(Example)
];
