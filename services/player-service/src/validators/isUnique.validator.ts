import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';
import { randomInt } from 'crypto';
import { getConnection, getManager } from 'typeorm';
import { Player } from '../players/entities/player.entity';

export function IsUniqueInTable(
  table: string,
  validationOptions?: ValidationOptions,
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isUniqueInTable',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [table],
      options: validationOptions,
      validator: {
        async validate(value: any, args: ValidationArguments) {
          const count = await getConnection()
            .createQueryBuilder()
            .from(table, table)
            .where(args.property + ' = :value', {
              value: args.value,
            })
            .getCount();
          console.log('Count: ', count);
          return count === 0;
        },
      },
    });
  };
}
