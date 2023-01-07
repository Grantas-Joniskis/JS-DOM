export class BookTable {

    static instance;

    constructor() {
        if (!BookTable.instance) {
            BookTable.instance = this;
        }
        return BookTable.instance;
    }

    initTable(tableData) {
        const container = document.querySelector('.js-container');
        container.innerHTML += 
        `<div class="js-table-container col-8 pt-2 ps-3">
            <table class="js-table table table-dark stripped text-center">
                <thead>
                    <th>Author</th>
                    <th>Book Name</th>
                    <th>Rating</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    ${this.#createRows(tableData)}
                </tbody>
            </table>
        </div>`;
    }

    updateTable(tableData) {
        const tbody = document.querySelector('.js-table tbody');
        tbody.innerHTML += this.#createRow(tableData);
    }

    #createRow({author, book, rating}) {
        return `<tr>
        <td>${author}</td>
        <td>${book}</td>
        <td>${rating}</td>
        <td>
            <button class="btn btn-warning">🖊️</button>
            <button class="btn btn-danger">🗙</button>
        </td>
    </tr>`;
    }

    #createRows(tableData) {
        if(tableData.length === 0) return '';
        let str = '';
        tableData.map((data) => {
            str += this.#createRow(data);
        });
        return str;
    }
}