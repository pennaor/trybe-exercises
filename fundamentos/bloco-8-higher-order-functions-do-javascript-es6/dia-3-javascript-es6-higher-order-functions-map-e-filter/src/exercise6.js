const books = require('../books');

const oldBooks = () => books.filter(
  (book) => 2022 - book.releaseYear > 60,
).map((book) => book.name);

module.exports = oldBooks;
