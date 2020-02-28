import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

/**
 * Please, all entity need extends from BaseEntity, because BaseEntity have a ID Column as UUID
 *
 * @export
 * @class Example
 */
@Entity({
  name: "example"
})
export class Example {

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  description: string;

}
