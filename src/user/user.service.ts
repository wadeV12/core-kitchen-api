import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IUser, User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<IUser>,
  ) {
  }

  public async create(): Promise<User> {
    const user = new User();
    user.firstName = 'lena';
    user.lastName = 'golovach';

    return await this.userRepository.save(user);
  }
}
