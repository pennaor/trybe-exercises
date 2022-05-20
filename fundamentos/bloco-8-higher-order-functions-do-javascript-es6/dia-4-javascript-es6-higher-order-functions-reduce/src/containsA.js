const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = () => names.reduce(
  (arrayTotal, named) => arrayTotal + named.split('')
    .reduce(
      (countAs, letter) => (letter === 'a' || letter === 'A' ? countAs + 1 : countAs + 0), 0,
    ),
  0,
);

module.exports = containsA;
