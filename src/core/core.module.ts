import { ValidationPipe } from './validation/validation.pipe';
import { Module } from '@nestjs/common';
import { TerminusOptionsService } from './terminus-options/terminus-options.service';
import { TerminusModule } from '@nestjs/terminus';

@Module({
  imports: [
    TerminusModule.forRootAsync({
      useClass: TerminusOptionsService,
    }),
  ],
  providers: [ValidationPipe],
  exports: [ValidationPipe]
})
export class CoreModule { }
