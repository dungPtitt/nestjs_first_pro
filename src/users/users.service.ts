import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { plainToInstance } from "class-transformer";
import { UserDto } from "./users.dto";
import { Repository } from "typeorm";
import { UserEntity } from "./users.entity";
import { success, setError } from "src/common/functions";
import { PostgresBaseService } from "src/common/postgres/base.service";

// @Injectable()
// export class UserService{
//   constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) {
    
//   }

//   async save(userDto: UserDto): Promise<UserDto> {
//     const saveUser = await this.userRepository.save(userDto);
//     return plainToInstance(UserDto, saveUser);
//   }
//   async update(id: string, userDto: UserDto): Promise<{}> {
//     const updateUser = await this.userRepository.update(id, userDto);
//     if(updateUser && updateUser.affected==1) {
//       return success(`update user with id=${id} success`);
//     }
//     return setError("user not found!", 404);
//   }
//   async findOne(id: string): Promise<{}> {
//     const user = await this.userRepository.findOne({where: {id: id as any}});
//     if(user) {
//       return success("get user success", {data: user})
//     }
//     return setError("user not found!", 404);
    
//   }

  
//   async delete(id: string): Promise<{}> {
//     const user = await this.userRepository.delete(id);
//     if(user && user.affected==1) {
//       return success("delete user success", [user])
//     } 
//     return setError("user not found!", 404);

//   }

//   async softDelete(id: string): Promise<{}> {
//     const user = await this.userRepository.softDelete(id);
//     if(user && user.affected==1) {
//       return success("soft delete success", [user])
//     } 
//     return setError("user not found!", 404);

//   }
// }

@Injectable()
export class UserService extends PostgresBaseService<UserEntity, UserDto>{
  constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) {
    super(userRepository)
  }
}