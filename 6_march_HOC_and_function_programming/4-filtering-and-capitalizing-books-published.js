const books = [
  { title: "The Hunger Games", author: "suzanne collins", year: 2008 },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "j.k. rowling",
    year: 1997,
  },
  { title: "To Kill a Mockingbird", author: "harper lee", year: 1960 },
  { title: "The Great Gatsby", author: "f. scott fitzgerald", year: 1925 },
  { title: "Pride and Prejudice", author: "jane austen", year: 1813 },
];

const filtered = books
  .filter((book) => book.year <= 2010)
  .map((book) => ({
    ...book,
    author: book.author
      .split(" ")
      .map((author) => author.replace(author[0], author[0].toUpperCase()))
      .join(" "),
  }));

console.log(filtered);
