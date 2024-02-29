import { IsNotEmpty } from "class-validator";
import { BaseEntity } from "src/common/postgres/base.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: 'User'
})
export class UserEntity extends BaseEntity{

  @Column({
    length: 50
  })
  @IsNotEmpty()
  firstName: string

  @Column()
  lastName: string

  @Column({
    default: false
  })

  isActive: boolean


}