export class BookContainer {

    static instance;

    constructor() {
        if(!BookContainer.instance) {
            BookContainer.instance = this;
        }
        return BookContainer.instance;
    }

    createContainer() {
        const bodyElement = document.querySelector('body');
        bodyElement.innerHTML += `<div class="js-container d-flex"></div>`;
    }
}

