const smallerName = require('../src/exercise2');

it('Verifica se smallerName retorna o livro de menor título', () => {
  expect(smallerName()).toBe('Duna');
});
