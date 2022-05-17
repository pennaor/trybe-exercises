const someBookWasReleaseOnThe80s = require('../src/exercise6');

it('Verifica se algum livro foi lançado na década de 80', () => {
  expect(someBookWasReleaseOnThe80s()).toBe(true);
});
