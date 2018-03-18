
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

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('book-tile__btn-container');

    grid.appendChild(tile);
    tile.appendChild(btnContainer)

    

    const trashBtn = TileBtn.createTrash(tile);
    const readBtn = TileBtn.createRead();
    const editBtn = TileBtn.createEdit();

    btnContainer.appendChild(trashBtn);
    btnContainer.appendChild(readBtn);
    btnContainer.appendChild(editBtn);
}
const addForm = document.querySelector('.add-form');
const addBtn = document.querySelector('.js-add-btn');

addBtn.addEventListener('click', function() {
    addForm.style.display = 'flex';
});