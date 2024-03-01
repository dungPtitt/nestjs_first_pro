import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController{
  constructor (private authSErvice: AuthService) {

  };

  @Post("register")
  register() {
    return "abcd a";
  }
  @Post("login")
  login() {
    return "abcd a";
  }
}