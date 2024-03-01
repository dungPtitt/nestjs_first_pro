import { IsEmail, IsNotEmpty } from "class-validator";
import { BaseEntity } from "src/base/common/postgres/base.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: 'User'
})
export class UserEntity extends BaseEntity{

  @Column()
  userName: string

  @Column()
  email: string

  @Column()
  password: string

  @Column({
    default: false
  })
  isActive: boolean
}