/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
const nameAndAge = require('../src/exercise2');

describe('Verifica comportamento de nameAndAge', () => {
  it('Verifica se nameAndAge é uma função', () => {
    expect(typeof nameAndAge).toBe('function');
  });
  it('Retorna um array de objetos com as informações do autor ordenados pela idade', () => {
    const expectedResult = [
      {
        age: 31,
        author: 'Isaac Asimov',
      },
      {
        age: 38,
        author: 'H. P. Lovecraft',
      },
      {
        age: 39,
        author: 'Stephen King',
      },
      {
        age: 43,
        author: 'George R. R. Martin',
      },
      {
        age: 45,
        author: 'Frank Herbert',
      },
      {
        age: 62,
        author: 'J. R. R. Tolkien',
      },
    ];
    expect(nameAndAge()).toEqual(expectedResult);
  });
});
