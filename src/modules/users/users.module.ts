import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "src/modules/auth/auth.module";
import { AuthService } from "src/modules/auth/auth.service";
import { UserController } from "./users.controller";
import { UserEntity } from "./users.entity";
import { UserService } from "./users.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    // AuthModule
  ],
  controllers: [UserController],
  providers: [UserService, AuthService]
})

export class UserModule{
}