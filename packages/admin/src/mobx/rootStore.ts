import { BookStore } from '../Library/Books/BooksStore';
import { TypeStore } from '../Library/DetailTypes/DetailTypeStore';
import { LoginStore } from '../Library/LogIn/LoginStore';
import { PracticesStore } from '../Library/Practices/PracticesStore';
import { TypeBooksStore } from '../Library/TypeBook/TypeBookStore';

export interface IRootStore {
  bookStore: BookStore;
  typeStore: TypeStore;
  loginStore: LoginStore;
  practicesStore: PracticesStore;
  typeBooksStore: TypeBooksStore;
}

export class RootStore implements IRootStore {
  bookStore: BookStore;

  typeStore: TypeStore;

  loginStore: LoginStore;

  practicesStore: PracticesStore;

  typeBooksStore: TypeBooksStore;

  constructor() {
    this.bookStore = new BookStore(this);
    this.typeStore = new TypeStore(this);
    this.loginStore = new LoginStore(this);
    this.practicesStore = new PracticesStore(this);
    this.typeBooksStore = new TypeBooksStore(this);
  }
}
