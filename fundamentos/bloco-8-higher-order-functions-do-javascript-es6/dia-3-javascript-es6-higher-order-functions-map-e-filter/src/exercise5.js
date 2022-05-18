const books = require('../books');

const fantasyOrScienceFictionAuthors = () => books.filter(
  (book) => book.genre.includes('Fantasia') || book.genre.includes('Ficção Científica'),
).map(
  (book) => book.author.name,
).sort();

module.exports = fantasyOrScienceFictionAuthors;
