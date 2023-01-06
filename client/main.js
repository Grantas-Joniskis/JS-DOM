import { ApiService } from "./services/api-service.js";
import { BookContainer } from "./components/book-container.js";
import { BookTable } from "./components/book-table.js";
import { BookForm } from "./components/book-form.js";

(async function initialize() {
    const apiService = new ApiService();
    const bookContainer = new BookContainer();
    const bookTable = new BookTable();
    const bookForm = new BookForm();

    const books = await apiService.getBooks();
    bookContainer.createContainer();
    bookTable.createTable(books);
    bookForm.createForm();
})();
