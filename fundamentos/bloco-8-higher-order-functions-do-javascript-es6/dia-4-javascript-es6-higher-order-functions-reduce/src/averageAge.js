const books = require('../books');

const averageAge = () => books.reduce(
  (totalAges, book) => (totalAges + (book.releaseYear - book.author.birthYear)), 0,
) / books.length;

module.exports = averageAge;
