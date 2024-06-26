
const odinLibrary = [];

const bookDialog = document.querySelector('.book-dialog')
const openDialog = document.querySelector('.add-book')
const closeDialog = document.querySelector('.cancel-dialog')
const submitDialog = document.querySelector('.submit-book')
let index = 0;

openDialog.addEventListener('click', () => {
    bookDialog.showModal();
})

closeDialog.addEventListener('click', () => {
    bookDialog.closeModal();
})

submitDialog.addEventListener('click', () => {
    index++;
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const hasRead = document.querySelector('#hasRead').checked; // boolean value of html checkbox
    const book = new Book(title, author, pages, hasRead, index);

    addToLibrary(book);
    displayBook(book);
})

class Book {
    constructor(title, author, pages, read, index) { 
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.index = index;
    }
    hasRead() {
        if (this.read == true) {
            return "Read";
        } else {
            return "Not Read";
        }
    }
    toggleRead() {
        if (this.read == true) {
            this.read = false;
        } else {
            this.read = true;
        }
    }
}


function addToLibrary(book) {
    odinLibrary.push(book)
}

function displayBook(book) {
    var libraryTable = document.getElementById("library-table");
    let row = libraryTable.insertRow(-1);

    let title = row.insertCell(0);
    title.textContent = book.title;

    let author = row.insertCell(1);
    author.textContent = book.author;

    let pages = row.insertCell(2);
    pages.textContent = book.pages;

    let read = row.insertCell(3);
    read.className = "read-toggle";
    read.textContent = book.hasRead();

    read.addEventListener('click', () => {
        book.toggleRead()
        read.textContent = book.hasRead();
    })

    const delBtn = document.createElement('button')
    delBtn.innerText = 'x';
    delBtn.addEventListener('click', () => {
        libraryTable.deleteRow(book.index+1);
        console.log(index)
    })

    let remove = row.insertCell(4);
    remove.appendChild(delBtn)

}

function displayLibrary(library) {
    console.log("Your Library:")
    for (i = 0; i < library.length; i++) {
        console.log(library[i].title);
        displayBook(library[i]);
    }
}

const book = new Book("Harry Potter and the Prisoner of Azkaban", "J. K. Rowling", 448, true, index)
index++;
const book2 = new Book("A Canticle for Leibowitz", "Walter M. Miller Jr.", 320, true, index)
index++;
const book3 = new Book("Earth Abides", "George R. Stewart", 325, false, index)
index++;
const book4 = new Book("The Lightning Thief", "Rick Riordan", 377, true, index)
index++;

addToLibrary(book)
addToLibrary(book2)
addToLibrary(book3)
addToLibrary(book4)
displayLibrary(odinLibrary)
