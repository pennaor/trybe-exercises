/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
const formatedBookNames = require('../src/exercise1');

it('Verifica se formatedBookNames retorna array com strings no formato NOME-GÊNERO-AUTOR', () => {
  expect(typeof formatedBookNames).toBe('function');
  const expectedResult = [
    'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
    'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
    'Fundação - Ficção Científica - Isaac Asimov',
    'Duna - Ficção Científica - Frank Herbert',
    'A Coisa - Terror - Stephen King',
    'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
  ];
  expect(formatedBookNames()).toEqual(expectedResult);
});
