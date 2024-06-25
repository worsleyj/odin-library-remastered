const myLibrary = [];

function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    if (haveRead == true) {
        this.readStatus = "Finished Reading";
    } else if (haveRead == false) {
        this.readStatus = "Still Reading";
    } else this.readStatus = "Error";
    this.haveRead = haveRead;
    this.info = function() {
      return this.title + " by " + this.author + ", " + this.pages + " pages";
    }
}

function addBookToLibrary(title, author, pages, haveRead) {
    const newBook = new Book(title, author, pages, haveRead)
    myLibrary.push(newBook)
}


function displayBook(book) {
    var libraryTable = document.getElementById("library-table");

    let row = libraryTable.insertRow(0)

    let title = row.insertCell(0);
    title.textContent = book.title;

    let author = row.insertCell(1);
    author.textContent = book.author;

    let pages = row.insertCell(2);
    pages.textContent = book.pages;

    let haveRead = row.insertCell(3);
    haveRead.textContent = book.readStatus;
}
function displayLibrary() {

}
addBookToLibrary("Book", "Author", 100, false);
addBookToLibrary("Book2", "Author", 100, true);

displayBook(myLibrary[1])
console.log(myLibrary[1])