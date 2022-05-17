const books = require('../books');

const booksOrderedByReleaseYearDesc = () => books.sort((a, b) => b.releaseYear - a.releaseYear);

module.exports = booksOrderedByReleaseYearDesc;
