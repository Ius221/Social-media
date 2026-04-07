import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUser } from './dtos/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  printsomething() {
    return {
      message: 'Hello World',
    };
  }

  @Post()
  saveUser(@Body() createUserDto: CreateUser) {
    return this.userService.createNewUser(createUserDto);
  }
}
