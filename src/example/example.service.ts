import { Injectable, Inject } from '@nestjs/common';
import { Repository, getRepository } from 'typeorm';
import { Example } from './example.entity';

@Injectable()
export class ExampleService {

  constructor(
    @Inject(getRepository(Example)) private readonly exampleRepository: Repository<Example>
  ) {}

  async findAll(): Promise<Example[]> {
    return this.exampleRepository.find();
  }
}
