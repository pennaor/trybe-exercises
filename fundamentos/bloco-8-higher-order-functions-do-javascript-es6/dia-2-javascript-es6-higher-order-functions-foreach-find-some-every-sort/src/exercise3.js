const books = require('../books');

const getNamedBook = () => books.find((book) => book.name.length === 26);

module.exports = getNamedBook;
