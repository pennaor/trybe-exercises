const books = require('../books');

const authorWith3DotsOnName = () =>
  books.find(
    (book) =>
      book.author.name[1] === '.'
      && book.author.name[4] === '.'
      && book.author.name[7] === '.',
  ).name;

module.exports = authorWith3DotsOnName;
