import { expect, test } from 'vitest';
import { Slug } from './slug';

test('deve ser possível criar um novo slug a partir do texto', () => {
  const slug = Slug.createFromText('Example question title');

  expect(slug.value).toBe('example-question-title');
});
