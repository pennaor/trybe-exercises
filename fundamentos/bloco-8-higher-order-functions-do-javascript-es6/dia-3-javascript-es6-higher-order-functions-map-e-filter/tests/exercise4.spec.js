/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
const oldBooksOrdered = require('../src/exercise4');

describe('Verifica comportamento de oldBooksOrdered', () => {
  it('Verifica se oldBooksOrdered é uma função', () => {
    expect(typeof oldBooksOrdered).toBe('function');
  });
  it('Verifica se retorna um array de livros com mais de 60 anos de publicação e em ordem decrescente', () => {
    const expectedResult = [
      {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: { name: 'H. P. Lovecraft', birthYear: 1890 },
        releaseYear: 1928,
      },
      {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: { name: 'Isaac Asimov', birthYear: 1920 },
        releaseYear: 1951,
      },
      {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
        releaseYear: 1954,
      },
    ];
    expect(oldBooksOrdered()).toEqual(expectedResult);
  });
});
