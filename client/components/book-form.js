export class BookForm {

    static instance;
    
    constructor() {
        if(!BookForm.instance) {
            BookForm.instance = this;
        }
        return BookForm.instance;
    }

    createForm() {
        const container = document.querySelector('.js-container');
        container.innerHTML += 
        `<div class="col-4 ps-3 pe-3 pt-2">
            <form class="border border-dark p-3">
                <legend>Add Item</legend>
                <label for="author" class="form-label">Author</label>
                <input type="text" id="author" name="author" class="form-control">
                <label for="author" class="form-label">Book</label>
                <input type="text" id="author" name="author" class="form-control">
                <label for="rating" class="form-label">Rating</label>
                <input type="number" id="rating" name="rating" class="form-control">
                <br>
                <button type="submit" class="btn btn-danger">Submit</button>
            </form>
        </div>`;
    }
}