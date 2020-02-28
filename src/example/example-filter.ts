import { FormFilter } from './../core/form/form-filter';
import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsString, MinLength, MaxLength } from 'class-validator';

export class ExampleFilter extends FormFilter {

  @ApiProperty({
    description: "Example description of fields"
  })
  @IsDefined()
  @IsString()
  @MinLength(0)
  @MaxLength(60)
  name: string;

  where() {
    return {
      name: this.name
    }
  }

}
