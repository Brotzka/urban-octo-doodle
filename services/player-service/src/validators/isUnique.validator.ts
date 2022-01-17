import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { randomInt } from 'crypto';
import { getConnection, getManager } from 'typeorm';

@ValidatorConstraint({ name: 'customText', async: false })
export class IsUniqueOnTable implements ValidatorConstraintInterface {
  validate(value: any, validationArguments?: ValidationArguments) {
    // const count = await getConnection()
    //     .createQueryBuilder()
    //     .from(table, table)
    //     .where(args.property + ' = :value', {
    //       value: args.value,
    //     })
    //     .getCount();
    console.log(this, validationArguments, value);
    const count = randomInt(0, 20);
    console.log('Count: ', count);
    return count === 0;
  }

  defaultMessage(validationArguments?: ValidationArguments): string {
    return '';
  }
}
