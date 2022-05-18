/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
const oldBooks = require('../src/exercise6');

describe('Verifica o comportamento de oldBooks', () => {
  it('Verifica se oldBooks é uma função', () => {
    expect(typeof oldBooks).toBe('function');
  });
  it('Verifica se retorna um array com o nome de todos os livros com mais de 60 anos de publicação', () => {
    const expectedResult = [
      'O Senhor dos Anéis',
      'Fundação',
      'O Chamado de Cthulhu',
    ];
    expect(oldBooks()).toEqual(expectedResult);
  });
});
