import { Exclude } from 'class-transformer';

export class CreatePlayerDto {
  readonly username: string;
  readonly email: string;
  readonly password: string;
}
