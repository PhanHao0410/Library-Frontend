import { makeObservable, observable, computed, action, toJS } from 'mobx';
import { IRootStore } from '../../mobx/rootStore';
import { CreatePracticeForm } from '../../types/Requests';
import AuthenticationService from '../../services/AuthenticationService';

export class PracticesStore {
  isLoading: boolean = false;

  isLoadingAction: boolean = false;

  practicesData: any = [];

  practicesError: any = {};

  deletePracticeData: any = {};

  editPracticeData: any = {};

  deletePracticeError: any = {};

  editPracticeError: any = {};

  rootStore: IRootStore;

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      isLoading: observable,
      isLoadingAction: observable,
      practicesData: observable,
      practicesError: observable,
      deletePracticeData: observable,
      editPracticeData: observable,
      deletePracticeError: observable,
      editPracticeError: observable,
      fetchDeletePractice: action,
      fetchUpdatePractice: action,
      getPracticesData: computed,
      getPracticesError: computed,
      getIsLoading: computed,
      getIsLoadingAction: computed,
      getDeletePracticeData: computed,
      getDeletePracticeError: computed,
      getEditPracticeData: computed,
      getEditPracticeError: computed,
      setResetDeletePractice: action,
      setResetEditPractice: action,
      setResetGetPractices: action,
    });
    this.rootStore = rootStore;
  }

  fetchAllPracticesByTypeCode = async (practiceType: string) => {
    this.isLoading = true;
    this.practicesData = [];
    this.practicesError = {};
    try {
      const response = await AuthenticationService.allPracticesInTypeCode(
        practiceType,
      );
      if (response.status === 200) {
        this.isLoading = false;
        this.practicesData = toJS(response.data);
      }
    } catch (e) {
      this.isLoading = false;
      this.practicesData = [];
      this.practicesError = e.response;
    }
  };

  fetchDeletePractice = async (
    practiceTypeCode: string,
    practiceId: string,
  ) => {
    this.isLoadingAction = true;
    this.deletePracticeData = {};
    this.deletePracticeError = {};
    try {
      const response = await AuthenticationService.deletePractice(
        practiceTypeCode,
        practiceId,
      );
      if (response.status === 200) {
        this.isLoadingAction = false;
        this.deletePracticeData = toJS(response);
      }
    } catch (e) {
      this.isLoadingAction = false;
      this.deletePracticeData = {};
      this.deletePracticeError = e.response;
    }
  };

  fetchUpdatePractice = async (practiceTypeCode, practiceId, updateData) => {
    this.isLoadingAction = true;
    this.editPracticeData = {};
    this.editPracticeError = {};
    try {
      const response = await AuthenticationService.updatePractice(
        practiceTypeCode,
        practiceId,
        updateData,
      );
      if (response.status === 200) {
        this.isLoadingAction = false;
        this.editPracticeData = toJS(response);
      }
    } catch (e) {
      this.isLoadingAction = false;
      this.editPracticeData = {};
      this.editPracticeError = toJS(e.response);
    }
  };

  setResetGetPractices() {
    this.isLoading = false;
    this.practicesData = [];
    this.practicesError = {};
  }

  setResetDeletePractice() {
    this.isLoadingAction = false;
    this.deletePracticeData = {};
    this.deletePracticeError = {};
  }

  setResetEditPractice() {
    this.isLoadingAction = false;
    this.editPracticeData = {};
    this.editPracticeError = {};
  }

  get getIsLoading() {
    return this.isLoading;
  }

  get getIsLoadingAction() {
    return this.isLoadingAction;
  }

  get getPracticesData() {
    return toJS(this.practicesData);
  }

  get getPracticesError() {
    return toJS(this.practicesError);
  }

  get getDeletePracticeData() {
    return toJS(this.deletePracticeData);
  }

  get getDeletePracticeError() {
    return toJS(this.deletePracticeError);
  }

  get getEditPracticeData() {
    return toJS(this.editPracticeData);
  }

  get getEditPracticeError() {
    return toJS(this.editPracticeError);
  }
}
