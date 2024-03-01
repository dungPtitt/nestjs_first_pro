import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { plainToInstance } from "class-transformer";
import { UserDto } from "./users.dto";
import { Repository } from "typeorm";
import { success, setError } from "src/common/functions";
import { PostgresBaseService } from "src/common/postgres/base.service";
import { AuthService } from "src/modules/auth/auth.service";
import { UserEntity } from "./users.entity";

@Injectable()
export class UserService extends PostgresBaseService<UserEntity, UserDto>{

  constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>,private authService: AuthService) {
    super(userRepository)
  }
  async register(userDto: UserDto): Promise<{}> {
    const createUser = await this.userRepository.save(userDto);

    const payload = { sub: createUser.id, username: createUser.userName };
    return {
      access_token: await this.authService.createToken(payload),
    };
  }

  async signIn(userName: string, password: string): Promise<any> {
    const user = await this.userRepository.findOne({where: {userName: userName}})
    if (user?.password !== password) {
      throw new UnauthorizedException();
    }
    // TODO: Generate a JWT and return it here
    // instead of the user object
    const token = await this.authService.createToken(user)
    return {
      token: token
    };
  }
}