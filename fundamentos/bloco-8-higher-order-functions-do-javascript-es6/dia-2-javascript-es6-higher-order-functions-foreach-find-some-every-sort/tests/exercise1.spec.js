/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
const authorBornIn1947 = require('../src/exercise1');

it('Verifica se authorBornIn1947 retorna o autor de books nascido em 1947', () => {
  expect(authorBornIn1947().name).toBe('A Coisa');
});
