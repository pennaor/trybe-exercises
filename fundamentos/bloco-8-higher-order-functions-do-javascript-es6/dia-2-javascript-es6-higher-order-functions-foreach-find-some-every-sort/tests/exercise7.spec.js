const authorUnique = require('../src/exercise7');

it('Verifica se não há autores nascidos no mesmo ano', () => {
  expect(authorUnique()).toBe(false);
});
