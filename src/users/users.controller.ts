import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  printsomething() {
    return {
      message: 'Hello World',
    };
  }
}
