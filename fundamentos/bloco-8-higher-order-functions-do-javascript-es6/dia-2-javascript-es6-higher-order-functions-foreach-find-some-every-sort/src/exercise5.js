const books = require('../books');

const everyoneWasBornOnSecXX = () => books.every(
  (book) => book.author.birthYear >= 1900 && book.author.birthYear < 2000,
);

module.exports = everyoneWasBornOnSecXX;
