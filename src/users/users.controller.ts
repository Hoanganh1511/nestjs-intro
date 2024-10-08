import {
  Controller,
  Get,
  Post,
  Patch,
  Put,
  Delete,
  Body,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  public getUsers() {
    return 'You sent a get request to users endpoint';
  }
  @Post()
  public createUsers() {
    return `You sent a post request to users endpoint`;
  }
}
