import { makeObservable, observable, computed, action, toJS } from 'mobx';
import { IRootStore } from '../../mobx/rootStore';
import { UpdateBookForm } from '../../types/Requests';
import AuthenticationService from '../../services/AuthenticationService';

export class BookStore {
  isLoading: boolean = false;

  isLoadingAction: boolean = false;

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
      isLoadingAction: observable,
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
      getIsLoadingAction: computed,
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
    this.isLoadingAction = true;
    this.deleteBookData = {};
    this.deleteBookError = {};
    try {
      const response = await AuthenticationService.deleteBook(
        bookTypeCode,
        bookId,
      );
      if (response.status === 200) {
        this.isLoadingAction = false;
        this.deleteBookData = toJS(response);
      }
    } catch (e) {
      this.isLoadingAction = false;
      this.deleteBookData = {};
      this.deleteBookError = e.response;
    }
  };

  fetchUpdateBook = async (
    bookTypeCode,
    bookId,
    updateData: UpdateBookForm,
  ) => {
    this.isLoadingAction = true;
    this.editBookData = {};
    this.editBookError = {};
    try {
      const response = await AuthenticationService.updateBook(
        bookTypeCode,
        bookId,
        updateData,
      );
      if (response.status === 200) {
        this.isLoadingAction = false;
        this.editBookData = toJS(response);
      }
    } catch (e) {
      this.isLoadingAction = false;
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
    this.isLoadingAction = false;
    this.deleteBookData = {};
    this.deleteBookError = {};
  }

  setResetEditBook() {
    this.isLoadingAction = false;
    this.editBookData = {};
    this.editBookError = {};
  }

  get getIsLoading() {
    return this.isLoading;
  }

  get getIsLoadingAction() {
    return this.isLoadingAction;
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
