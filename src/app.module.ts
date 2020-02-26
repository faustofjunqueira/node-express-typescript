import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './core';
import { ExampleService } from './example/example.service';
import { ExampleModule } from './example/example.module';

@Module({
  imports: [CoreModule, ExampleModule],
  controllers: [AppController],
  providers: [AppService, ExampleService],
})
export class AppModule {}
