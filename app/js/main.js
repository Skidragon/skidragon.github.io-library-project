
function Book (title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead; 
}

Book.prototype = {
    getInfo: function() {
        return `${this.title} is created by ${this.author} which has ${this.pages} pages.`;
    }
}

const addForm = document.querySelector('.add-form');
const body = document.querySelector('body');
            
//Form information getters
const titleBox = document.querySelector('#add-title-info');
const authorBox = document.querySelector('#add-author-info');
const pagesBox = document.querySelector('#add-pages-info');
const readBtns = documen.querySelector('.js-read-me');
//Form Buttons
const addBtn = document.querySelector('.js-btn-add');
const submitBtn = document.querySelector('.js-btn-submit');
const cancelBtn = document.querySelector('.js-btn-cancel');

function resetForm() {
    titleBox.value = '';
    authorBox.value = '';
    pagesBox.value = '';
            
        }
function addTile() {

    const grid = document.querySelector('.books__grid');
    
    const tile = document.createElement('div');
    const tileClasses = ['book-tile'];

    tile.classList.add(...tileClasses);

    const book = new Book(titleBox.value, authorBox.value, pagesBox.value, false);

    const bookText = document.createElement('p');
    const bookTextClasses = ['book-tile__info'];
    bookText.classList.add(...bookTextClasses);
    bookText.textContent = book.getInfo();


    const btnContainer = document.createElement('div');
    btnContainer.classList.add('book-tile__btn-container');

    grid.appendChild(tile);
    tile.appendChild(bookText);
    tile.appendChild(btnContainer)

    
    //createTrash arguments deletes the target
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

addBtn.addEventListener('click', function() {
    addForm.style.display = 'flex';
});