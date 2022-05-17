const books = require('../books');

const authorUnique = () => {
  let uniqueBirth = true;
  books.forEach((book) => {
    const sameBirth = books.some(
      (someBook) =>
        book !== someBook && book.author.birthYear === someBook.author.birthYear,
    );
    if (sameBirth) {
      uniqueBirth = false;
    }
  });
  return uniqueBirth;
};

module.exports = authorUnique;
