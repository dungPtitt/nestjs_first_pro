import { Body, Controller, Delete, Get, Param, Post, Put, UseFilters } from "@nestjs/common";
import { HttpExceptionFilter } from "src/common/http-exception.filter";
import { UserDto } from "./users.dto";
import { UserService } from "./users.service";


@Controller('users')
@UseFilters(new HttpExceptionFilter())
export class UserController{
  constructor(private readonly userService: UserService){

  }

  @Post()
  @UseFilters(new HttpExceptionFilter())
  createUser(@Body() user: UserDto): Promise<{}> {
    console.log(user)
    return this.userService.save(user)
  }
  @UseFilters(new HttpExceptionFilter())
  @Put(':id')
  updateUserById(@Param('id') id: string, @Body() user: UserDto): Promise<{}> {
    return this.userService.update(id, user)
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<{}> {
    return this.userService.findOne(id)
  }

  @Delete(':id')
  deleteById(@Param('id') id: string): Promise<{}> {
    return this.userService.delete(id)
  }

  @Delete('softDelete/:id')
  softDelete(@Param('id') id: string): Promise<{}> {
    return this.userService.softDelete(id)
  }
}