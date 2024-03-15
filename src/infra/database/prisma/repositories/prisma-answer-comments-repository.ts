import { PaginationParams } from '@/core/repositories/pagination-params';
import { AnswerCommentsRepository } from '@/domain/forum/application/repositories/answer-comments-repository';
import { AnswerComment } from '@/domain/forum/enterprise/entities/answer-comment';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaAnswerCommentsRepository
  implements AnswerCommentsRepository
{
  findById(id: string): Promise<AnswerComment | null> {
    throw new Error('Método não implementado');
  }

  findManyByAnswerId(
    answerId: string,
    params: PaginationParams,
  ): Promise<AnswerComment[]> {
    throw new Error('Método não implementado');
  }

  create(answerComment: AnswerComment): Promise<void> {
    throw new Error('Método não implementado');
  }

  delete(answerComment: AnswerComment): Promise<void> {
    throw new Error('Método não implementado');
  }
}
