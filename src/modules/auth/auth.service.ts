import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
// import { UserService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async createToken(user: any): Promise<{}> {
    const payload = { sub: user.id, userName: user.userName };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}