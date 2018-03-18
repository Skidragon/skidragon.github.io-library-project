//Global Variables
const addForm = document.querySelector('.add-form');
const body = document.querySelector('body');

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

Book.prototype = {
    getInfo: function () {
        return `${this.title} is created by ${this.author} which has ${this.pages} pages.`;
    }
}




//Form Buttons
const addFormBtns = {
    addBtn: document.querySelector('.js-btn-add'),
    submitBtn: document.querySelector('.js-btn-submit'),
    cancelBtn: document.querySelector('.js-btn-cancel'),
}

function resetForm() {

}

function addBookToLibrary() {
    const grid = document.querySelector('.books__grid');

    const tile = Tile.createTile();

    //Gets the book information from form and adds it to book tile
    const titleInfo = addFormInputs.titleBox.value;
    const authorInfo = addFormInputs.authorBox.value;
    const pagesInfo = addFormInputs.pagesBox.value;

    const book = new Book(titleInfo, authorInfo, pagesInfo, false);
    const bookText = document.createElement('p');
    const bookTextClasses = ['book-tile__info'];
    bookText.classList.add(...bookTextClasses);
    bookText.textContent = book.getInfo();

    //Holds the buttons on the bottom of the tile
    const btnContainer = document.createElement('div');
    btnContainer.classList.add('book-tile__btn-container');

    grid.appendChild(tile);
    tile.appendChild(bookText);
    tile.appendChild(btnContainer)


    //createTrash argument deletes the target
    const trashBtn = TileBtn.createTrash(tile);

    //Shows whether or not the book has been read
    const readBtn = TileBtn.createRead(book.isRead);

    //This btn lets the user modify the text content in the tile
    const editBtn = TileBtn.createEdit();

    btnContainer.appendChild(trashBtn);
    btnContainer.appendChild(readBtn);
    btnContainer.appendChild(editBtn);
    resetForm();
}

function init() {
    addFormBtns.addBtn.addEventListener('click', function () {
        addForm.style.display = 'flex';
        body.style.overflow = 'hidden';
    });

    addFormBtns.submitBtn.addEventListener('click', function () {
        addForm.style.display = 'none';
        body.style.overflow = 'scroll';
        addBookToLibrary()
    });

    addFormBtns.cancelBtn.addEventListener('click', function () {
        addForm.style.display = 'none';
        body.style.overflow = 'scroll';
    });
}

init();