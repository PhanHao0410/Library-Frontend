import { makeObservable, observable, computed, action, toJS } from 'mobx';
import { IRootStore } from '../../mobx/rootStore';
import { UpdateBookForm } from '../../types/Requests';
import AuthenticationService from '../../services/AuthenticationService';

export class BookStore {
  isLoading: boolean = false;

  isLoadingUpdate: boolean = false;

  booksData: any = [];

  booksError: any = {};

  deleteBookData: any = {};

  editBookData: any = {};

  deleteBookError: any = {};

  editBookError: any = {};

  rootStore: IRootStore;

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      isLoading: observable,
      isLoadingUpdate: observable,
      booksData: observable,
      booksError: observable,
      deleteBookData: observable,
      deleteBookError: observable,
      editBookData: observable,
      editBookError: observable,
      fetchDeleteBook: action,
      fetchUpdateBook: action,
      fetchAllBooksInType: action,
      getBooksData: computed,
      getIsLoadingUpdate: computed,
      getBooksError: computed,
      getIsLoading: computed,
      getDeleteBookData: computed,
      getDeleteBookError: computed,
      getEditBookData: computed,
      getEditBookError: computed,
      setResetDeleteBook: action,
      setResetEditBook: action,
      setResetAllBooks: action,
    });
    this.rootStore = rootStore;
  }

  fetchAllBooksInType = async (bookType: string) => {
    this.isLoading = true;
    this.booksData = [];
    this.booksError = {};
    try {
      const response = await AuthenticationService.allBooksInTypeCode(bookType);
      if (response.status === 200) {
        this.isLoading = false;
        this.booksData = toJS(response.data);
      }
    } catch (e) {
      this.isLoading = false;
      this.booksData = [];
      this.booksError = toJS(e.response);
    }
  };

  fetchDeleteBook = async (bookTypeCode, bookId) => {
    this.isLoadingUpdate = true;
    this.deleteBookData = {};
    this.deleteBookError = {};
    try {
      const response = await AuthenticationService.deleteBook(
        bookTypeCode,
        bookId,
      );
      if (response.status === 200) {
        this.isLoadingUpdate = false;
        this.deleteBookData = toJS(response);
      }
    } catch (e) {
      this.isLoadingUpdate = false;
      this.deleteBookData = {};
      this.deleteBookError = e.response;
    }
  };

  fetchUpdateBook = async (
    bookTypeCode,
    bookId,
    updateBook: UpdateBookForm,
    file,
  ) => {
    this.isLoadingUpdate = true;
    this.editBookData = {};
    this.editBookError = {};
    try {
      const response = await AuthenticationService.updateBook(
        bookTypeCode,
        bookId,
        updateBook,
        file,
      );
      if (response.status === 200) {
        this.isLoadingUpdate = false;
        this.editBookData = toJS(response);
      }
    } catch (e) {
      this.isLoadingUpdate = false;
      this.editBookData = {};
      this.editBookError = toJS(e.response);
    }
  };

  setResetAllBooks() {
    this.isLoading = false;
    this.booksData = [];
    this.booksError = [];
  }

  setResetDeleteBook() {
    this.isLoadingUpdate = false;
    this.deleteBookData = {};
    this.deleteBookError = {};
  }

  setResetEditBook() {
    this.isLoadingUpdate = false;
    this.editBookData = {};
    this.editBookError = {};
  }

  get getIsLoading() {
    return this.isLoading;
  }

  get getIsLoadingUpdate() {
    return this.isLoadingUpdate;
  }

  get getBooksData() {
    return toJS(this.booksData);
  }

  get getBooksError() {
    return toJS(this.booksError);
  }

  get getDeleteBookData() {
    return toJS(this.deleteBookData);
  }

  get getDeleteBookError() {
    return toJS(this.deleteBookError);
  }

  get getEditBookData() {
    return toJS(this.editBookData);
  }

  get getEditBookError() {
    return toJS(this.editBookError);
  }
}
