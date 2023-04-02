const books = [
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "Animal Farm", author: "George Orwell", year: 1945 },
];

function alphabeticalSort(books, callback) {
    sorted = books.map(book => book.title).sort()
    return callback(sorted)
}

function logBooks(books){
    console.log("Titles in alphabatic order:")
    books.forEach(book => console.log("\t".concat(book)))
}



alphabeticalSort(books, logBooks)