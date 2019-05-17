import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(
    private userService: UserService,
  ) {
  }

  @Get()
  public async get() {
    return await this.userService.getAll();
  }

  @Post()
  public async createUser() {
    return await this.userService.create();
  }
}
