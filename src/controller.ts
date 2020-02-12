import { NotFoundError } from './errors/NotFoundError';
import {Controller, Get} from 'routing-controllers'


@Controller('/')
export class Junda {

  @Get('/')
  junda() {
    throw new NotFoundError('Oi mundo cao', {junda:123123});
  }
}