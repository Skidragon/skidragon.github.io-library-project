const Tile = {
    createTile: function() {
        const tile = document.createElement('div');
        const tileClasses = ['book-tile'];
        tile.classList.add(...tileClasses);
        return tile;
    }
};


const TileBtn = {

    //This button delete the whole tile and its children in this program.
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
    createRead: function (isRead) {

        const readBtn = document.createElement('button');
        const readClasses = ['btn','book-tile__btn-read'];

        if(isRead === true) {
            readBtn.textContent = 'Read';
            readClasses.push('btn--success');
        }
        else {
            readBtn.textContent = `Didn't Read`;
            readClasses.push('btn--danger');            
        }

        readBtn.classList.add(...readClasses);

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

