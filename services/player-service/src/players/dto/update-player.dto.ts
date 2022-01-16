import { IsEmail, Min } from 'class-validator';

export class UpdatePlayerDto {
  readonly username: string;

  @IsEmail()
  readonly email: string;

  @Min(8)
  readonly password: string;
}
