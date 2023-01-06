export class ApiService {

    #serverAddress = 'http://localhost:3000';
    static instance;

    constructor() {
        if(!ApiService.instance) {
            ApiService.instance = this;
        }
    }

    async getBooks () {
        const response = await fetch(`${this.#serverAddress}/books`);
        const books = await response.json();

        console.log(books)
        return books;
    }
}
