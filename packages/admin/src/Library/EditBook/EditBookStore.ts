import { makeObservable, observable, computed, action, toJS } from 'mobx';
import { IRootStore } from '../../mobx/rootStore';
import AuthenticationService from '../../services/AuthenticationService';
import { StatusPayload, TimePayload } from '../../types/Requests';

export class EditBookStore {
  isLoading: boolean = false;

  isLoadingTime: boolean = false;

  isLoadingGetFile: boolean = false;

  bookData: any = {};

  bookError: any = {};

  updateStatusData: any = {};

  updateStatusError: any = {};

  updateTimeData: any = {};

  updateTimeError: any = {};

  filePdfData: any = '';

  filePdfError: any = {};

  rootStore: IRootStore;

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      isLoading: observable,
      isLoadingTime: observable,
      isLoadingGetFile: observable,
      bookData: observable,
      bookError: observable,
      updateStatusData: observable,
      updateStatusError: observable,
      updateTimeData: observable,
      updateTimeError: observable,
      filePdfData: observable,
      filePdfError: observable,
      fetchUpdateStatus: action,
      fetchGetBookSingle: action,
      fetchUpdateTime: action,
      fetchGetFilePDF: action,
      getBookData: computed,
      getIsLoadingTime: computed,
      getIsLoadingFile: computed,
      getBookError: computed,
      getIsLoading: computed,
      getUpdateStatusData: computed,
      getUpdateStatusError: computed,
      getUpdateTimeData: computed,
      getUpdateTimeError: computed,
      getFilePdfData: computed,
      setResetUpdateStatus: action,
      setResetUpdateTime: action,
      setResetBookSingle: action,
      setResetGetFilePdf: action,
    });
    this.rootStore = rootStore;
  }

  fetchGetBookSingle = async (typeCode: string, bookId: string) => {
    this.isLoading = true;
    this.bookData = {};
    this.bookError = {};
    try {
      const response = await AuthenticationService.getSingleBook(
        typeCode,
        bookId,
      );
      if (response.status === 200) {
        this.isLoading = false;
        this.bookData = toJS(response.data);
      }
    } catch (e) {
      this.isLoading = false;
      this.bookData = {};
      this.bookError = toJS(e.response);
    }
  };

  fetchUpdateStatus = async (
    typeCode: string,
    bookId: string,
    statusPayload: StatusPayload,
  ) => {
    this.isLoading = true;
    this.updateStatusData = {};
    this.updateStatusError = {};
    try {
      const response = await AuthenticationService.updateStatusBook(
        typeCode,
        bookId,
        statusPayload,
      );
      if (response.status === 200) {
        this.isLoading = false;
        this.updateStatusData = toJS(response);
      }
    } catch (e) {
      this.isLoading = false;
      this.updateStatusData = {};
      this.updateStatusError = toJS(e.response);
    }
  };

  fetchUpdateTime = async (
    typeCode: string,
    bookId: string,
    timePayload: TimePayload,
  ) => {
    this.isLoadingTime = true;
    this.updateTimeData = {};
    this.updateTimeError = {};
    try {
      const response = await AuthenticationService.updateTimeBook(
        typeCode,
        bookId,
        timePayload,
      );
      if (response.status === 200) {
        this.isLoadingTime = false;
        this.updateTimeData = toJS(response);
      }
    } catch (e) {
      this.isLoadingTime = false;
      this.updateTimeData = {};
      this.updateTimeError = toJS(e.response);
    }
  };

  fetchGetFilePDF = async (fileId: string) => {
    this.isLoadingGetFile = true;
    this.filePdfData = '';
    this.filePdfError = {};
    try {
      const response = await AuthenticationService.getFilePDF(fileId);
      if (response.status === 200) {
        this.isLoadingGetFile = false;
        const blob = new Blob([response.data], { type: 'application/pdf' });
        const urlFile = URL.createObjectURL(blob);
        this.filePdfData = urlFile;
      }
    } catch (e) {
      this.isLoadingGetFile = false;
      this.filePdfData = '';
      this.filePdfError = toJS(e.response);
    }
  };

  setResetBookSingle() {
    this.isLoading = false;
    this.bookData = {};
    this.bookError = {};
  }

  setResetGetFilePdf() {
    this.isLoadingGetFile = false;
    this.filePdfData = '';
    this.filePdfError = {};
  }

  setResetUpdateStatus() {
    this.isLoading = false;
    this.updateStatusData = {};
    this.updateStatusError = {};
  }

  setResetUpdateTime() {
    this.isLoadingTime = false;
    this.updateTimeData = {};
    this.updateTimeError = {};
  }

  get getIsLoading() {
    return this.isLoading;
  }

  get getIsLoadingTime() {
    return this.isLoadingTime;
  }

  get getIsLoadingFile() {
    return this.isLoadingGetFile;
  }

  get getBookData() {
    return toJS(this.bookData);
  }

  get getBookError() {
    return toJS(this.bookError);
  }

  get getUpdateStatusData() {
    return toJS(this.updateStatusData);
  }

  get getUpdateStatusError() {
    return toJS(this.updateStatusError);
  }

  get getUpdateTimeData() {
    return toJS(this.updateTimeData);
  }

  get getUpdateTimeError() {
    return toJS(this.updateTimeError);
  }

  get getFilePdfData() {
    return toJS(this.filePdfData);
  }

  get getFilePdfError() {
    return toJS(this.getFilePdfError);
  }
}
