import { makeObservable, observable, computed, action, toJS } from 'mobx';
import { IRootStore } from '../../mobx/rootStore';
import { CreateBookForm, CreatePracticeForm } from '../../types/Requests';
import AuthenticationService from '../../services/AuthenticationService';

export class TypeStore {
  isLoading: boolean = false;

  isLoadingAdd: boolean = false;

  typeData: any = [];

  addBookData: any = {};

  addPracticeData: any = {};

  typeError: string = '';

  addPracticeError: any = {};

  addBookError: any = {};

  rootStore: IRootStore;

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      isLoading: observable,
      isLoadingAdd: observable,
      typeData: observable,
      typeError: observable,
      addBookData: observable,
      addBookError: observable,
      addPracticeData: observable,
      addPracticeError: observable,
      fetchTypeData: action,
      fetchAddBook: action,
      getTypeData: computed,
      getIsLoadingAdd: computed,
      getIsLoading: computed,
      getErrorData: computed,
      getAddBookData: computed,
      getAddBookError: computed,
      getAddpracticeData: computed,
      getAddPracticeError: computed,
      setResetAddBook: action,
      setResetAddPractice: action,
    });
    this.rootStore = rootStore;
  }

  fetchTypeData = async (typeCode) => {
    this.isLoading = true;
    this.typeData = [];
    this.typeError = '';
    try {
      const response = await AuthenticationService.allTypeData(typeCode);
      if (response.status === 200) {
        this.isLoading = false;
        this.typeData = toJS(response.data);
      }
    } catch (e) {
      this.isLoading = false;
      this.typeData = [];
      this.typeError = e.response.data.content;
    }
  };

  fetchAddBook = async (
    bookTypeCode: string,
    addBook: CreateBookForm,
    file: File,
  ) => {
    this.isLoadingAdd = true;
    this.addBookData = {};
    this.addBookError = {};
    try {
      const response = await AuthenticationService.createBook(
        bookTypeCode,
        addBook,
        file,
      );
      if (response.status === 200) {
        this.isLoadingAdd = false;
        this.addBookData = toJS(response);
      }
    } catch (e) {
      this.isLoadingAdd = false;
      this.addBookData = {};
      this.addBookError = toJS(e.response);
    }
  };

  fetchAddPractice = async (
    practiceTypeCode: string,
    addPractice: CreatePracticeForm,
  ) => {
    this.isLoadingAdd = true;
    this.addPracticeData = {};
    this.addPracticeError = {};
    try {
      const response = await AuthenticationService.creatPractice(
        practiceTypeCode,
        addPractice,
      );
      if (response.status === 200) {
        this.isLoadingAdd = false;
        this.addPracticeData = toJS(response);
      }
    } catch (e) {
      this.isLoadingAdd = false;
      this.addPracticeData = {};
      this.addPracticeError = toJS(e.response);
    }
  };

  setResetAddBook() {
    this.isLoadingAdd = false;
    this.addBookData = {};
    this.addBookError = {};
  }

  setResetAddPractice() {
    this.isLoadingAdd = false;
    this.addPracticeData = {};
    this.addPracticeError = {};
  }

  get getIsLoadingAdd() {
    return this.isLoadingAdd;
  }

  get getTypeData() {
    return toJS(this.typeData);
  }

  get getIsLoading() {
    return this.isLoading;
  }

  get getErrorData() {
    return this.typeError;
  }

  get getAddBookData() {
    return toJS(this.addBookData);
  }

  get getAddBookError() {
    return toJS(this.addBookError);
  }

  get getAddpracticeData() {
    return toJS(this.addPracticeData);
  }

  get getAddPracticeError() {
    return toJS(this.addPracticeError);
  }
}
