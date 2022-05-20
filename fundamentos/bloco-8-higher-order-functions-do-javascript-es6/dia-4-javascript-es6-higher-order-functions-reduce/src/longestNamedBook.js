const books = require('../books');

const longestNamedBook = () => books.reduce(
  (longestName, book) => (longestName.name.length > book.name.length ? longestName : book),
);

module.exports = longestNamedBook;
