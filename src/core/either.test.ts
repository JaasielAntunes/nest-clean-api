import { Either, left, right } from '@/core/either';

function doSomeThing(shouldSuccess: boolean): Either<string, number> {
  if (shouldSuccess) {
    return right(10);
  } else {
    return left('error');
  }
}

test('sucesso', () => {
  const result = doSomeThing(true);

  expect(result.isRight()).toBe(true);
  expect(result.isLeft()).toBe(false);
});

test('erro', () => {
  const result = doSomeThing(false);

  expect(result.isLeft()).toBe(true);
  expect(result.isRight()).toBe(false);
});
