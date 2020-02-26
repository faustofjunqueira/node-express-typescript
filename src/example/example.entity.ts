import { Column, Entity } from "typeorm";
import { BaseCrudEntity } from '../core/database/base-crud-entity';

/**
 * Please, all entity need extends from BaseEntity, because BaseEntity have a ID Column as UUID
 *
 * @export
 * @class Example
 * @extends {BaseCrudEntity}
 */
@Entity({
  name: "example"
})
export class Example extends BaseCrudEntity {

  @Column({ length: 500 })
  name: string;

  @Column('text')
  description: string;

}
