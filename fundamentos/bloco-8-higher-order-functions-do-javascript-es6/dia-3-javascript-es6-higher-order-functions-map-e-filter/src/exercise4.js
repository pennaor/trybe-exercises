const books = require('../books');

const oldBooksOrdered = () => books.filter(
  (book) => 2022 - book.releaseYear > 60,
).sort((a, b) => a.releaseYear - b.releaseYear);

module.exports = oldBooksOrdered;
