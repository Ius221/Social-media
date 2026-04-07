import { IsString } from 'class-validator';

export class CreateUser {
  @IsString()
  name: string;
}
