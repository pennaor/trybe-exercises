const books = require('../books');

const fantasyOrScienceFiction = () => books.filter(
  (book) => book.genre.includes('Fantasia') || book.genre.includes('Ficção Científica'),
);

module.exports = fantasyOrScienceFiction;
