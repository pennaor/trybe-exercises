/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
const averageAge = require('../src/averageAge');

it('Verifica se averageAge é uma função.', () => {
  expect(typeof averageAge).toBe('function');
});
it('Verifica a média de idade dos autores no momento do lançamento de seus livros', () => {
  const expectedResult = 43;
  expect(averageAge()).toBe(expectedResult);
});
