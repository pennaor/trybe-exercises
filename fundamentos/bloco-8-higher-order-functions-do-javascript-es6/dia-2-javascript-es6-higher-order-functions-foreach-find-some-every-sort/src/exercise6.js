const books = require('../books');

const someBookWasReleaseOnThe80s = () => books.some(
  (book) => book.releaseYear >= 1980 && book.releaseYear < 1990,
);

module.exports = someBookWasReleaseOnThe80s;
