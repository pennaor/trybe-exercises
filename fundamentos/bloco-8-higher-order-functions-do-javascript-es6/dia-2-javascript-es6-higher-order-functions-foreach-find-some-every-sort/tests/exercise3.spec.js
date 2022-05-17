const getNamedBook = require('../src/exercise3');

it('Verifica se getNamedBook retorna o livro de título com 26 caracteres', () => {
  const expectedResult = {
    author: {
      birthYear: 1948,
      name: 'George R. R. Martin',
    },
    genre: 'Fantasia',
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    releaseYear: 1991,
  };
  expect(getNamedBook()).toEqual(expectedResult);
});
