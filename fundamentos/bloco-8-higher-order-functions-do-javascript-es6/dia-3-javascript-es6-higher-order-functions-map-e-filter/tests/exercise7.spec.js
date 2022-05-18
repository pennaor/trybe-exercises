/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
const authorWith3DotsOnName = require('../src/exercise7');

describe('Verifica o comportamento de authorWith3DotsOnName', () => {
  it('Verifica se authorWith3DotsOnName é uma função', () => {
    expect(typeof authorWith3DotsOnName).toBe('function');
  });
  it('Verifica se retorna o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.', () => {
    expect(authorWith3DotsOnName()).toBe('O Senhor dos Anéis');
  });
});
