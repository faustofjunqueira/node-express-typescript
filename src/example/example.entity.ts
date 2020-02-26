import { Column, Entity } from "typeorm";
import { BaseEntity } from './../core/database/base-entity';

/**
 * Please, all entity need extends from BaseEntity, because BaseEntity have a ID Column as UUID
 *
 * @export
 * @class Example
 * @extends {BaseEntity}
 */
@Entity({
  name: "example"
})
export class Example extends BaseEntity {

  @Column({ length: 500 })
  name: string;

  @Column('text')
  description: string;

}
