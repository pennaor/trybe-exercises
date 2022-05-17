const everyoneWasBornOnSecXX = require('../src/exercise5');

it(
  'Verifica se todas as pessoas autoras nasceram no século XX',
  () => {
    expect(everyoneWasBornOnSecXX()).toBe(false);
  },
);
