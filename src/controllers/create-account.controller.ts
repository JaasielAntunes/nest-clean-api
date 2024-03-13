import {
  Body,
  ConflictException,
  Controller,
  HttpCode,
  Post,
  UsePipes,
} from '@nestjs/common';
import { hash } from 'bcryptjs';
import { ZodValidationPipe } from 'src/pipes/zod-validation-pipe';
import { PrismaService } from 'src/prisma/prisma-service';
import z from 'zod';

const createAccountSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(7),
});

type CreateAccountSchema = z.infer<typeof createAccountSchema>;

@Controller('/accounts')
export class CreateAccountController {
  // eslint-disable-next-line prettier/prettier
  constructor(private prisma: PrismaService) { }

  @Post()
  @HttpCode(201)
  @UsePipes(new ZodValidationPipe(createAccountSchema))
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async handle(@Body() body: CreateAccountSchema) {
    const { name, email, password } = createAccountSchema.parse(body);

    const userWithSameEmail = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userWithSameEmail) {
      throw new ConflictException(
        'Já existe um usuário com o mesmo endereço de e-mail!',
      );
    }

    const hashedPassword = await hash(password, 8);

    await this.prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
  }
}
