import { ApiService } from "./services/api-service.js";
import { BookContainer } from "./components/book-container.js";
import { BookTable } from "./components/book-table.js";
import { BookForm } from "./components/book-form.js";

(async function initialize() {
    const apiService = new ApiService();
    const bookContainer = new BookContainer();
    const bookTable = new BookTable();
    const bookForm = new BookForm();

    try {
        const books = await apiService.getBooks();
        bookContainer.createContainer();
        bookTable.initTable(books);
        bookForm.initForm();
    } catch(error) {
        console.error(error);
    }
})();
