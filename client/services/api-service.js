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

        return books;
    }

    async postBook({author, book, rating}) {
        const response = await fetch(`${this.#serverAddress}/books`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                author,
                book,
                rating
            })
        });
        return response;
    }
}
