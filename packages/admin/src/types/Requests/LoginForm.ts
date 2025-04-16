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
}

export interface UpdateBookForm {
  bookName: string;
  bookAuthor: string;
  bookUseLanguage: string;
  bookPoster: string;
  bookSource: string;
  bookType: string;
  bookDescribe: string;
}

export interface CreatePracticeForm {
  practiceName: string;
  practiceLink: string;
  practiceDescribe: string;
}
