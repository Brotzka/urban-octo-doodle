import { IsEmail, IsNotEmpty, Min } from 'class-validator';
import { IsUniqueInTable } from '../../validators/isUnique.validator';

export class CreatePlayerDto {
  @IsNotEmpty()
  @IsUniqueInTable('players', {})
  readonly username: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsNotEmpty()
  readonly password: string;
}
