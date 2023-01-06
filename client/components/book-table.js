export class BookTable {

    static instance;

    constructor() {
        if(!BookTable.instance) {
            BookTable.instance = this;
        }
        return BookTable.instance;
    }

    createTable() {
        const container = document.querySelector('.js-container');
        container.innerHTML += 
    }

}