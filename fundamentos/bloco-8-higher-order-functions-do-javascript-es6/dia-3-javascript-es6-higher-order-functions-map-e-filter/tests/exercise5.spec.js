/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
const fantasyOrScienceFictionAuthors = require('../src/exercise5');

describe('Verifica comportamento de fantasyOrScienceFictionAuthors', () => {
  it('Verifica se fantasyOrScienceFictionAuthors é uma função', () => {
    expect(typeof fantasyOrScienceFictionAuthors).toBe('function');
  });
  it('Verifica se retorna um array em ordem alfabética com os nomes de todas as pessoas autoras de ficção científica ou fantasia.', () => {
    const expectedResult = [
      'Frank Herbert',
      'George R. R. Martin',
      'Isaac Asimov',
      'J. R. R. Tolkien',
    ];
    expect(fantasyOrScienceFictionAuthors()).toEqual(expectedResult);
  });
});
