import { makeObservable, observable, computed, action, toJS } from 'mobx';
import { IRootStore } from '../../mobx/rootStore';
import AuthenticationService from '../../services/AuthenticationService';

export class TypeBooksStore {
  isLoading: boolean = false;

  bookTypesData: any = [];

  bookTypeError: any = {};

  rootStore: IRootStore;

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      isLoading: observable,
      bookTypesData: observable,
      bookTypeError: observable,
      getBookTypesData: computed,
      getIsLoading: computed,
      getBookTypesError: computed,
      fetchAllBookTypes: action,
      setResetBookTypes: action,
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

  setResetBookTypes() {
    this.isLoading = false;
    this.bookTypesData = [];
    this.bookTypeError = {};
  }

  get getIsLoading() {
    return this.isLoading;
  }

  get getBookTypesData() {
    return toJS(this.bookTypesData);
  }

  get getBookTypesError() {
    return toJS(this.bookTypeError);
  }
}
