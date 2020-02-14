import { ValidationPipe } from './validation.pipe';
import { Module } from '@nestjs/common';

@Module({
  providers: [ValidationPipe],
  exports: [ValidationPipe]
})
export class CoreModule {}
