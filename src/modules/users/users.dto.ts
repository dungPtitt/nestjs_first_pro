import { Expose, Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, Length, MinLength } from "class-validator";

export class UserDto {

  @Expose()
  id: string

  @IsNotEmpty()
  @Expose()
  userName: string

  @IsEmail()
  @Expose()
  email: string

  @IsNotEmpty()
  @MinLength(8)
  password: string

  @Expose()
  isActive: boolean
}