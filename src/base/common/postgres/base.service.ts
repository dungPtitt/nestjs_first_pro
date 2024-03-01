import { ForbiddenException, HttpException, HttpStatus } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { Repository } from "typeorm";
import { UserDto } from "../base.dto";
import { setError, success } from "../functions";
import { BaseEntity } from "./base.entity";

export class PostgresBaseService<Entity extends BaseEntity, Dto> {
  constructor(protected repo: Repository<Entity>) {

  };


  async save(userDto: Dto): Promise<{}> {
    try{
      const saveUser = await this.repo.save(userDto as any);
      return success("create user success!");
    }catch(error) {
      throw new ForbiddenException(error);
    }
  }

  async update(id: string, userDto: Dto): Promise<{}> {
    const updateUser = await this.repo.update(id, userDto as any);
    if(updateUser && updateUser.affected==1) {
      return success(`update user with id=${id} success`);
    }
    return setError("user not found!", 404);
  }

  async findOne(id: string): Promise<{}> {
    const user = await this.repo.findOne({where: {id: id as any}});
    if(user) {
      return success("get user success", {data: user})
    }
    return setError("user not found!", 404);
    
  }
  // async login(name: string): Promise<{}> {
  //   const user = await this.repo.findOne({where: {id: id}});
  //   if(user) {
  //     return success("get user success", {data: user})
  //   }
  //   return setError("user not found!", 404);
    
  // }

  async delete(id: string): Promise<{}> {
    const user = await this.repo.delete(id);
    if(user && user.affected==1) {
      return success("delete user success", [user])
    } 
    return setError("user not found!", 404);
  }

  async softDelete(id: string): Promise<{}> {
    const user = await this.repo.softDelete(id);
    if(user && user.affected==1) {
      return success("soft delete success", [user])
    } 
    return setError("user not found!", 404);

  }
}