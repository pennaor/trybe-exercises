const books = require('../books');

const reduceNames = () =>
  `${books.reduce((array, book) => array.concat(book.author.name), []).join(', ')}.`;

module.exports = reduceNames;
