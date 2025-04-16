import { AxiosResponse } from 'axios';
import { BaseService, BaseServiceGet } from './BaseService';
import {
  LoginForm,
  CreateBookForm,
  CreatePracticeForm,
  UpdateBookForm,
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
const creatBook = (
  bookTypeCode: string,
  addBook: CreateBookForm,
): Promise<AxiosResponse> => {
  return BaseService.post(`${BASE_URL}/v1/${bookTypeCode}/createBook`, addBook);
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
  updateData: UpdateBookForm,
): Promise<AxiosResponse> => {
  return BaseService.put(
    `${BASE_URL}/v1/${bookTypeCode}/updateBook/${bookId}`,
    updateData,
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

export default {
  login,
  allBookType,
  allTypeData,
  creatBook,
  creatPractice,
  deleteBook,
  updateBook,
  deletePractice,
  updatePractice,
  allBooksInTypeCode,
  allPracticesInTypeCode,
};
