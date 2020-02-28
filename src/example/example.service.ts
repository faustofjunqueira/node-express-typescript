import { ExampleFilter } from './example-filter';
import { PaginateFactory } from './../core/form/paginate-factory';
import { Paginate } from './../core/form/paginate';
import { Injectable, Inject } from '@nestjs/common';
import { Repository, getRepository } from 'typeorm';
import { Example } from './example.entity';

@Injectable()
export class ExampleService {

  constructor(
    @Inject(getRepository(Example)) private readonly exampleRepository: Repository<Example>,
    @Inject() private readonly paginateFactory: PaginateFactory
  ) {}

  async findAll(): Promise<Example[]> {
    return this.exampleRepository.find();
  }

  async paginate(filter: ExampleFilter): Promise<Paginate<Example>> {
    return await this.paginateFactory.paginate(this.exampleRepository, filter);
  }

  async findByFilter(filter: ExampleFilter): Promise<Example[]> {
    return this.exampleRepository.find(filter.filter())
  }
}
