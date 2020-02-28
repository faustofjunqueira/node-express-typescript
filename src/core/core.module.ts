import { ValidationPipe } from './validation/validation.pipe';
import { Module } from '@nestjs/common';
import { TerminusOptionsService } from './terminus-options/terminus-options.service';
import { TerminusModule } from '@nestjs/terminus';
import { databaseProvider } from './database/database.provider';
import { PaginateFactory } from './form/paginate-factory';

@Module({
  imports: [
    TerminusModule.forRootAsync({
      useClass: TerminusOptionsService,
    }),
  ],
  providers: [ValidationPipe, ...(databaseProvider as any[]), PaginateFactory],
  exports: [ValidationPipe, ...(databaseProvider as any[])]
})
export class CoreModule { }
