const books = require('../books');

const authorBornIn1947 = () => books.find((book) => book.author.birthYear === 1947);

module.exports = authorBornIn1947;
