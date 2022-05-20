/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
const studentAverage = require('../src/studentAverage');

it('Verifica se studentAverage é uma função.', () => {
  expect(typeof studentAverage).toBe('function');
});
it('Verifica a média de idade dos autores no momento do lançamento de seus livros', () => {
  const expected = [
    { name: 'Pedro Henrique', average: 7.8 },
    { name: 'Miguel', average: 9.2 },
    { name: 'Maria Clara', average: 8.8 },
  ];
  expect(studentAverage()).toEqual(expected);
});
