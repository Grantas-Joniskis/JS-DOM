class BookFormComponent {
  htmlElement;
  onSubmit;
  authorInput;
  bookInput;
  ratingInput;
  formNameElement;
  submitButton;

  constructor({ onSubmit }) {
    this.htmlElement = document.createElement('form');
    this.htmlElement.className = 'shadow border border-dark p-3 col-3';
    this.htmlElement.innerHTML = `
      <h2 class="h5 text-center">Add Book To List</h2>
      <div class="mb-3">
        <label for="author" class="form-label">Author</label>
        <input type="text" class="form-control" id="author" name="author">
      </div>
      <div class="mb-3">
        <label for="book" class="form-label">Book</label>
        <input type="text" class="form-control" id="book" name="book">
      </div>
      <div class="mb-3">
        <label for="rating" class="form-label">Rating</label>
        <input type="number" class="form-control" id="rating" name="rating">
      </div>
      <button type="submit" class="btn btn-danger w-100">Add Book</button>`;

    this.onSubmit = onSubmit;
    this.titleInput = this.htmlElement.querySelector('[name=author]');
    this.yearInput = this.htmlElement.querySelector('[name=book]');
    this.damagedInput = this.htmlElement.querySelector('[name=rating]');
    this.formNameElement = this.htmlElement.querySelector('h2');
    this.submitButton = this.htmlElement.querySelector('button');

    this.htmlElement.addEventListener('submit', this.handleSubmit);
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const values = {
      author: formData.get('author'),
      book: formData.get('book'),
      rating: Number(formData.get('rating')),
    }

    //   inversion of control
    this.onSubmit(values);

    event.target.reset();
  }

  enableEditing = ({ author, book, rating }) => {
    this.titleInput.value = author;
    this.yearInput.value = book;
    this.damagedInput.value = rating;
    this.formNameElement.innerText = 'Update Book';
    this.submitButton.innerText = 'Update Book';
    this.submitButton.className = 'btn btn-warning w-100';
  }

  disableEditing = () => {
    this.htmlElement.reset();
    this.formNameElement.innerText = 'Add Book';
    this.submitButton.innerText = 'Add Book';
    this.submitButton.className = 'btn btn-danger w-100';
  }
}

export default BookFormComponent;
