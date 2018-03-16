    const TileBtn = {

        //This button delete the whole tile and its children
        createTrash: function (deleteTarget) {
            const trashBtn = document.createElement('button');
            const trashBtnClasses = ['btn','book-tile__btn-delete'];
            trashBtn.classList.add(...trashBtnClasses);
            trashBtn.addEventListener('click', function () {
                deleteTarget.remove();
            });

            const trashIcon = document.createElement('i');

            const trashIconClasses = ['far','fa-trash-alt'];
            
            trashIcon.classList.add(...trashIconClasses);

            trashBtn.appendChild(trashIcon);

            return trashBtn;
        },


        //Tells the user whether the book has been read or not
        createRead: function () {

            const readBtn = document.createElement('button');
            const readClasses = ['btn','book-tile__btn-read', 'btn--danger'];
            readBtn.classList.add(...readClasses);
            readBtn.textContent = `Didn't Read`;
            readBtn.addEventListener('click', function () {

                if (this.getAttribute('class').indexOf('btn--danger') != -1) {
                    readBtn.textContent = `Read`;
                    this.classList.remove('btn--danger');
                    this.classList.add('btn--success');
                } else {
                    readBtn.textContent = `Didn't Read`;             
                    this.classList.add('btn--danger');
                    this.classList.remove('btn--success');
                }
            });
            return readBtn;
            
        },

        //Able to edit the text content
        createEdit: function () {
            const editBtn = document.createElement('button');
            const editClasses = ['btn','book-tile__btn-edit', 'btn--primary'];
            editBtn.classList.add(...editClasses);
            editBtn.textContent = `Edit Book`;                    
            return editBtn;
            
        }
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