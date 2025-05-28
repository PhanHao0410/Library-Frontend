import { makeObservable, observable, computed, action, toJS } from 'mobx';
import { IRootStore } from '../../mobx/rootStore';
import AuthenticationService from '../../services/AuthenticationService';

export class TypeBooksStore {
  isLoading: boolean = false;

  isLoadingCreate: boolean = false;

  bookTypesData: any = [];

  bookTypeError: any = {};

  createTypeData: any = {};

  createTypeError: any = {};

  rootStore: IRootStore;

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      isLoading: observable,
      isLoadingCreate: observable,
      bookTypesData: observable,
      bookTypeError: observable,
      createTypeData: observable,
      createTypeError: observable,
      getBookTypesData: computed,
      getIsLoading: computed,
      getIsLoadingCreate: computed,
      getBookTypesError: computed,
      getCreateTypeData: computed,
      getCreateTypeError: computed,
      fetchAllBookTypes: action,
      fetchCreateTypeBook: action,
      setResetBookTypes: action,
      setResetCreateType: action,
    });
    this.rootStore = rootStore;
  }

  fetchAllBookTypes = async () => {
    this.isLoading = true;
    this.bookTypesData = [];
    this.bookTypeError = {};
    try {
      const response = await AuthenticationService.allBookType();
      if (response.status === 200) {
        this.isLoading = false;
        this.bookTypesData = toJS(response.data);
      }
    } catch (e) {
      this.isLoading = false;
      this.bookTypesData = [];
      this.bookTypeError = toJS(e.response);
    }
  };

  fetchCreateTypeBook = async (createValue) => {
    this.isLoadingCreate = true;
    this.createTypeData = {};
    this.createTypeError = {};
    try {
      const response = await AuthenticationService.createTypeBook(createValue);
      if (response.status === 200 || response.status === 201) {
        this.isLoadingCreate = false;
        this.createTypeData = toJS(response);
      }
    } catch (e) {
      this.isLoadingCreate = false;
      this.createTypeData = {};
      this.createTypeError = toJS(e.response);
    }
  };

  setResetBookTypes() {
    this.isLoading = false;
    this.bookTypesData = [];
    this.bookTypeError = {};
  }

  setResetCreateType() {
    this.isLoadingCreate = false;
    this.createTypeData = {};
    this.createTypeError = {};
  }

  get getIsLoading() {
    return this.isLoading;
  }

  get getIsLoadingCreate() {
    return this.isLoadingCreate;
  }

  get getBookTypesData() {
    return toJS(this.bookTypesData);
  }

  get getBookTypesError() {
    return toJS(this.bookTypeError);
  }

  get getCreateTypeData() {
    return toJS(this.createTypeData);
  }

  get getCreateTypeError() {
    return toJS(this.createTypeError);
  }
}
