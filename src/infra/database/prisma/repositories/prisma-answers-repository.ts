import { PaginationParams } from '@/core/repositories/pagination-params';
import { AnswersRepository } from '@/domain/forum/application/repositories/answers-repository';
import { Answer } from '@/domain/forum/enterprise/entities/answer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaAnswersRepository implements AnswersRepository {
  findById(id: string): Promise<Answer | null> {
    throw new Error('Método não implementado');
  }

  findManyByQuestionId(
    questionId: string,
    params: PaginationParams,
  ): Promise<Answer[]> {
    throw new Error('Método não implementado');
  }

  create(answer: Answer): Promise<void> {
    throw new Error('Método não implementado');
  }

  save(answer: Answer): Promise<void> {
    throw new Error('Método não implementado');
  }

  delete(answer: Answer): Promise<void> {
    throw new Error('Método não implementado');
  }
}
