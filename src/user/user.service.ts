import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IUser, User } from './user.entity';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<IUser>,
  ) {
  }

  public async create(user: CreateUserDto): Promise<User | Error> {
    const { firstName, lastName, email } = user;
    const newUser = new User();
    newUser.firstName = firstName;
    newUser.lastName = lastName;
    newUser.email = email;

    try {
      return await this.userRepository.save(user);
    } catch (error) {
      return error;
    }
  }

  public async delete(id: string) {
    try {
      this.userRepository.delete(id);
    }
  }

  public async getAll(): Promise<User[]> {
    return await this.userRepository.find();
  }
}
