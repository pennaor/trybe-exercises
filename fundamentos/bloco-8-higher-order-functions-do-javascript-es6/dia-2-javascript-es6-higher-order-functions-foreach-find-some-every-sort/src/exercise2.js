const books = require('../books');

const smallerName = () => {
  let nameBook = books[0].name;
  books.forEach((book) => {
    if (book.name.length < nameBook.length) {
      nameBook = book.name;
    }
  });
  return nameBook;
};

module.exports = smallerName;
