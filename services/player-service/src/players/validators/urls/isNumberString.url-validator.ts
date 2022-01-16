import { IsNumberString } from 'class-validator';

export class IsNumberStringUrlValidator {
  @IsNumberString()
  id: number;
}
