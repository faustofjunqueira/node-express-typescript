import { Body, Controller, Post } from '@nestjs/common';
import { IsString } from 'class-validator';
import { AppService } from './app.service';

class Example {

  @IsString()
  public teste: string;

}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getHello(@Body() teste: Example): string {
    throw new Error("Junda");
    return this.appService.getHello();
  }
}
