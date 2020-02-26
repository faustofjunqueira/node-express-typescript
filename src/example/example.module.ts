import { Module } from '@nestjs/common';
import { CoreModule } from './../core/core.module';
import { exampleProviders } from './example.provider';
import { ExampleService } from './example.service';

@Module({
  imports: [CoreModule],
  providers: [
    ...exampleProviders,
    ExampleService,
  ],
  exports: [
    ExampleService
  ]
})
export class ExampleModule {}
