import { ApiService } from "../services/api-service.js";
import { BookTable } from "./book-table.js";

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
            <form method="post" class="js-form-submit border border-dark p-3">
                <legend>Add Item</legend>
                <label for="author" class="form-label">Author</label>
                <input type="text" id="author" name="author" class="form-control" minlength="1" required>
                <label for="book" class="form-label">Book</label>
                <input type="text" id="book" name="book" class="form-control" minlength="1" required>
                <label for="rating" class="form-label">Rating</label>
                <input type="number" id="rating" name="rating" class="form-control" step=".1">
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
            const rating = Number(formData.get('rating'));
            
            const newBook = { author, book, rating };
            
            await new ApiService().postBook(newBook);
            new BookTable().updateTable(newBook);

            form.reset();
        });
    }
}
