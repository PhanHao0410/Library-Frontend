import axios, { AxiosResponse } from 'axios';
import { BaseService, BaseServiceGet } from './BaseService';
import { ACCESS_TOKEN } from '../constants/localStorage';
import {
  LoginForm,
  CreateBookForm,
  CreatePracticeForm,
  UpdateBookForm,
  StatusPayload,
  TimePayload,
} from '../types/Requests';
import { UserResponse } from '../types/Responses';

const BASE_URL = 'https://library-backend-kv29.onrender.com/api';

const allBookType = (): Promise<AxiosResponse> => {
  return BaseServiceGet.get(`${BASE_URL}/v1`);
};

const allTypeData = (data: string): Promise<AxiosResponse<UserResponse>> => {
  return BaseServiceGet.get(`${BASE_URL}/v1/getType/${data}`);
};

const allBooksInTypeCode = (bookType: string): Promise<AxiosResponse> => {
  return BaseServiceGet.get(`${BASE_URL}/v1/${bookType}/books`);
};

const allPracticesInTypeCode = (
  practiceType: string,
): Promise<AxiosResponse> => {
  return BaseServiceGet.get(`${BASE_URL}/v1/${practiceType}/practices`);
};
const createBook = (
  bookTypeCode: string,
  addBook: CreateBookForm,
  file: File,
): Promise<AxiosResponse> => {
  const formData = new FormData();

  formData.append('file', file);

  const addBookBlob = new Blob([JSON.stringify(addBook)], {
    type: 'application/json',
  });

  formData.append('createBook', addBookBlob);
  return BaseService.post(
    `${BASE_URL}/v1/${bookTypeCode}/createBook`,
    formData,
  );
};
const creatPractice = (
  practiceTypeCode: string,
  addPractice: CreatePracticeForm,
): Promise<AxiosResponse> => {
  return BaseService.post(
    `${BASE_URL}/v1/${practiceTypeCode}/createPractice`,
    addPractice,
  );
};

const login = (data: LoginForm): Promise<AxiosResponse> => {
  return BaseService.post(`${BASE_URL}/auth/login`, data);
};

const deleteBook = (
  bookTypeCode: string,
  bookId: string,
): Promise<AxiosResponse> => {
  return BaseService.delete(
    `${BASE_URL}/v1/${bookTypeCode}/deleteBook/${bookId}`,
  );
};

const updateBook = (
  bookTypeCode: string,
  bookId: string,
  updateBook: UpdateBookForm,
  file: File,
): Promise<AxiosResponse> => {
  const formData = new FormData();

  formData.append('file', file);

  const updateBookBlob = new Blob([JSON.stringify(updateBook)], {
    type: 'application/json',
  });

  formData.append('updateBook', updateBookBlob);
  return BaseService.put(
    `${BASE_URL}/v1/${bookTypeCode}/updateBook/${bookId}`,
    formData,
  );
};

const deletePractice = (
  practiceTypeCode: string,
  practiceId: string,
): Promise<AxiosResponse> => {
  return BaseService.delete(
    `${BASE_URL}/v1/${practiceTypeCode}/deletePractice/${practiceId}`,
  );
};

const updatePractice = (
  practiceTypeCode: string,
  practiceId: string,
  updateData,
): Promise<AxiosResponse> => {
  return BaseService.put(
    `${BASE_URL}/v1/${practiceTypeCode}/updatePractice/${practiceId}`,
    updateData,
  );
};

const getSingleBook = (
  typeCode: string,
  bookId: string,
): Promise<AxiosResponse> => {
  return BaseServiceGet.get(
    `${BASE_URL}/v1/${typeCode}/getSingleBook/${bookId}`,
  );
};

const updateStatusBook = (
  typeCode: string,
  bookId: string,
  statusPayload: StatusPayload,
): Promise<AxiosResponse> => {
  return BaseService.put(
    `${BASE_URL}/v1/${typeCode}/updateStatus/${bookId}`,
    statusPayload,
  );
};

const updateTimeBook = (
  typeCode: string,
  bookId: string,
  timePayload: TimePayload,
): Promise<AxiosResponse> => {
  return BaseService.put(
    `${BASE_URL}/v1/${typeCode}/updateTime/${bookId}`,
    timePayload,
  );
};

const getFilePDF = (fileId: string): Promise<any> => {
  return BaseServiceGet.get(`${BASE_URL}/v1/file/${fileId}`, {
    responseType: 'blob',
  });
};

const createTypeBook = (createValue): Promise<AxiosResponse> => {
  return BaseService.post(`${BASE_URL}/v1/createNewType`, createValue);
};

export default {
  login,
  allBookType,
  allTypeData,
  createBook,
  creatPractice,
  deleteBook,
  updateBook,
  deletePractice,
  updatePractice,
  allBooksInTypeCode,
  allPracticesInTypeCode,
  getSingleBook,
  updateStatusBook,
  updateTimeBook,
  getFilePDF,
  createTypeBook,
};
