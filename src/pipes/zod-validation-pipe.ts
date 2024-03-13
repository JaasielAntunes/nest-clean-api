import { PipeTransform, BadRequestException } from '@nestjs/common';
import { ZodError, ZodSchema } from 'zod';
import { fromZodError } from 'zod-validation-error';

export class ZodValidationPipe implements PipeTransform {
  // eslint-disable-next-line prettier/prettier
  constructor(private schema: ZodSchema) { }

  transform(value: unknown) {
    try {
      this.schema.parse(value);
    } catch (error) {
      if (error instanceof ZodError) {
        throw new BadRequestException({
          message: 'Falha na validação dos dados!',
          statusCode: 400,
          errors: fromZodError(error),
        });
      }

      throw new BadRequestException('Falha na validação dos dados!');
    }
    return value;
  }
}
