import { ApiService } from "../services/api-service.js";

export class BookForm {

    static instance;

    constructor() {
        if (!BookForm.instance) {
            BookForm.instance = this;
        }
        return BookForm.instance;
    }

    initForm() {
        const container = document.querySelector('.js-container');
        container.innerHTML +=
            `<div class="col-4 ps-3 pe-3 pt-2">
            <form method="POST" class="js-form-submit border border-dark p-3">
                <legend>Add Item</legend>
                <label for="author" class="form-label">Author</label>
                <input type="text" id="author" name="author" class="form-control">
                <label for="book" class="form-label">Book</label>
                <input type="text" id="book" name="book" class="form-control">
                <label for="rating" class="form-label">Rating</label>
                <input type="number" id="rating" name="rating" class="form-control">
                <br>
                <button type="submit" class="js-btn-submit btn btn-danger">Submit</button>
            </form>
        </div>`;

        this.#registerEvents();
    }

    #registerEvents() {
        const form = document.querySelector('.js-form-submit');
        form.addEventListener('submit', async (event) => {
            event.preventDefault();
            const formData = new FormData(form);
            const author = formData.get('author');
            const book = formData.get('book');
            const rating = formData.get('rating');

            await new ApiService().postBook({ author, book, rating });
            console.log("Called!");
        });
    }
}
