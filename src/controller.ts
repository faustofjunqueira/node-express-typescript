import {Controller, Get} from 'routing-controllers'


@Controller('/')
export class Junda {

  @Get('/')
  junda() {
    return '<h1>Junda</h1>'
  }
}