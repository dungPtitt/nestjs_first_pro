import { Body, Controller, Delete, ForbiddenException, Get, Param, ParseIntPipe, Post, Put, UseFilters, UseGuards } from "@nestjs/common";
import { AuthGuard } from "src/modules/auth/auth.guard";
import { HttpExceptionFilter } from "src/base/common/http-exception.filter";
import { UserDto } from "./users.dto";
import { UserService } from "./users.service";


@Controller('users')
@UseFilters(new HttpExceptionFilter())
export class UserController{
  constructor(private readonly userService: UserService){

  }

  @Post()
  createUser(@Body() user: UserDto): Promise<{}> {
    console.log(user)
    return this.userService.save(user)
  }

  @Put(':id')
  updateUserById(@Param('id') id: string, @Body() user: UserDto): Promise<{}> {
    return this.userService.update(id, user)
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  findOne(@Param('id') id: string): Promise<{}> {
    return this.userService.findOne(id)
  }

  // @Get(':id')
  // findOne(@Param('id', ParseIntPipe) id: number): string {
  //   return "success";
  // }
  

  @Delete(':id')
  deleteById(@Param('id') id: string): Promise<{}> {
    return this.userService.delete(id)
  }

  @Delete('softDelete/:id')
  softDelete(@Param('id') id: string): Promise<{}> {
    return this.userService.softDelete(id)
  }

  @Post('register')
  register(@Body() user: UserDto): Promise<{}> {
    return this.userService.register(user);
  }

  @Post('login')
  login(@Body() loginDto: Record<string, any>): Promise<{}> {
    return this.userService.signIn(loginDto.userName, loginDto.password);
  }
}