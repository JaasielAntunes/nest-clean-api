import { PaginationParams } from '@/core/repositories/pagination-params';
import { QuestionsRepository } from '@/domain/forum/application/repositories/questions-repository';
import { Question } from '@/domain/forum/enterprise/entities/question';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaQuestionsRepository implements QuestionsRepository {
  findById(id: string): Promise<Question | null> {
    throw new Error('Método não implementado');
  }

  findBySlug(slug: string): Promise<Question | null> {
    throw new Error('Método não implementado');
  }

  findManyRecent(params: PaginationParams): Promise<Question[]> {
    throw new Error('Método não implementado');
  }

  save(question: Question): Promise<void> {
    throw new Error('Método não implementado');
  }

  create(question: Question): Promise<void> {
    throw new Error('Método não implementado');
  }

  delete(question: Question): Promise<void> {
    throw new Error('Método não implementado');
  }
}
