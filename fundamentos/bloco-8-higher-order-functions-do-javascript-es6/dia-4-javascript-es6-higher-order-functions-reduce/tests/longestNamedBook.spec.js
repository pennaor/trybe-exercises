/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
const longestNamedBook = require('../src/longestNamedBook');

it('Verifica se longestNamedBook é uma função', () => {
  expect(typeof longestNamedBook).toBe('function');
});

it('Verifica se longestNamedBook retorna o livro de maior nome', () => {
  const expectedResult = {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  };
  expect(longestNamedBook()).toEqual(expectedResult);
});
