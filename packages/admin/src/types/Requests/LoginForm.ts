export interface LoginForm {
  userName: string;
  userPassword: string;
}

export interface CreateBookForm {
  bookName: string;
  bookAuthor: string;
  bookUseLanguage: string;
  bookPoster: string;
  bookSource: string;
  bookType: string;
  bookDescribe: string;
  bookStatus: string;
  bookStatusCode: string;
  expectedTime: string;
  spentTime: string;
}

export interface UpdateBookForm {
  bookName: string;
  bookAuthor: string;
  bookUseLanguage: string;
  bookPoster: string;
  bookSource: string;
  bookType: string;
  bookDescribe: string;
  bookStatus: string;
  bookStatusCode: string;
  expectedTime: string;
  spentTime: string;
}

export interface CreatePracticeForm {
  practiceName: string;
  practiceLink: string;
  practiceDescribe: string;
}

export interface StatusPayload {
  bookStatus: string;
  bookStatusCode: string;
}

export interface TimePayload {
  expectedTime: string;
  spentTime: string;
}
