/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
const flatten = require('../src/flatten');

it('Verifica se flatten é uma função.', () => {
  expect(typeof flatten).toBe('function');
});
it('Verifica se flatten retorna array com strings no formato NOME-GÊNERO-AUTOR', () => {
  const expectedResult = [
    '1', '2', '3', true, 4, 5, 6,
  ];
  expect(flatten()).toEqual(expectedResult);
});
