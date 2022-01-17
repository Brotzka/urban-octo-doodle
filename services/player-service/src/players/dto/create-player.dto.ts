import { IsEmail, IsNotEmpty, Validate } from 'class-validator';
import { IsUniqueOnTable } from '../../validators/isUnique.validator';

export class CreatePlayerDto {
  @IsNotEmpty()
  @Validate(IsUniqueOnTable, ['players'], {})
  readonly username: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsNotEmpty()
  readonly password: string;
}
