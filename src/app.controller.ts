import { Body, Controller, Post } from '@nestjs/common';
import { IsString } from 'class-validator';
import { AppService } from './app.service';
import { ApiProperty } from '@nestjs/swagger';

class Example {

  @ApiProperty({
    description: "Example of documentation field"
  })
  @IsString()
  public teste: string;


}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getHello(@Body() teste: Example): string {
    return this.appService.getHello();
  }
}
