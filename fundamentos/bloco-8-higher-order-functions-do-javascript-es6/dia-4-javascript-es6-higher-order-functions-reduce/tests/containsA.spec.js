/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
const containsA = require('../src/containsA');

it('Verifica se containsA é uma função', () => {
  expect(typeof containsA).toBe('function');
});
it('Verifica se containsA retorna quantidade de letras a e A do array de nomes', () => {
  expect(containsA()).toBe(20);
});
