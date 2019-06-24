import { Controller, Get, Post, Body, Delete, Put, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './create-user.dto';
import { User } from './user.entity';

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
  public async create(@Body() user: CreateUserDto): Promise<User> {
    return await this.userService.create(user);
  }

  @Delete(':id')
  public async delete(@Param() params) {
    return null;
  }

  @Put()
  public async update() {

  }
}
