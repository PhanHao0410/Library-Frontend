import { makeObservable, observable, computed, action, toJS } from 'mobx';
import { IRootStore } from '../../mobx/rootStore';
import { LoginForm } from '../../types/Requests';
import AuthenticationService from '../../services/AuthenticationService';
import { ACCESS_TOKEN } from '../../constants/localStorage';

export class LoginStore {
  isLoading: boolean = false;

  loginData: any = {};

  loginError: any = {};

  checkError: boolean = false;

  rootStore: IRootStore;

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      isLoading: observable,
      loginData: observable,
      loginError: observable,
      checkError: observable,
      fetchLogIn: action,
      getLoginData: computed,
      getIsLoading: computed,
      getErrorData: computed,
      getCheckError: computed,
      setResetLogin: action,
    });
    this.rootStore = rootStore;
  }

  fetchLogIn = async (data: LoginForm) => {
    this.isLoading = true;
    this.loginData = {};
    this.loginError = {};
    this.checkError = false;
    try {
      const response = await AuthenticationService.login(data);
      if (response.status === 200) {
        this.isLoading = false;
        this.loginData = response;
        sessionStorage.setItem(ACCESS_TOKEN, response.data.token);
      }
    } catch (e) {
      this.isLoading = false;
      this.loginData = '';
      this.loginError = e.response;
      this.checkError = true;
    }
  };

  setResetLogin() {
    this.isLoading = false;
    this.loginData = {};
    this.loginError = {};
    this.checkError = false;
  }

  get getLoginData() {
    return toJS(this.loginData);
  }

  get getIsLoading() {
    return this.isLoading;
  }

  get getErrorData() {
    return toJS(this.loginError);
  }

  get getCheckError() {
    return this.checkError;
  }
}
