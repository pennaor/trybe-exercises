/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
const reduceNames = require('../src/reduceNames');

it('Verifica se reduceNames é uma função.', () => {
  expect(typeof reduceNames).toBe('function');
});
it('Verifica se reduceNames retorna uma string com o nome dos autores', () => {
  const expectedResult = 'George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.';
  expect(reduceNames()).toBe(expectedResult);
});
