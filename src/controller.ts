import {Controller, Get, Body} from 'routing-controllers'
import { IsString } from 'class-validator';

class Data {

  @IsString({message: `Oi mundo cao`})
  field: string = "";
}

@Controller('/')
export class Junda {

  @Get('/')
  junda(@Body() junda: Data) {
    return junda;
  }
}