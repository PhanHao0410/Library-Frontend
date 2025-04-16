import React, { useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useForm } from 'react-hook-form';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import ErrorIcon from '@mui/icons-material/Error';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import { useStoreMobx } from '../../mobx/hook';
import LogIn from '../LogIn';
import { isHavingToken } from '../../utils/localStorage';
import { UpdateBookForm } from '../../types/Requests';
import Progress from '../../components/Progress';
import WarnNoData from '../../components/WarnNoData';
import {
  DetailBookContainer,
  TypeBookContent,
  ListBookContainer,
  BookDetailItem,
  DialogDeleteContainer,
  DialogUpdateContainer,
  DialogSuccess,
} from './styles';

type FormUpdate = {
  updateBook: {
    name: string;
    author: string;
    language: string;
    bookSource: string;
    describe: string;
    poster: string;
  };
};

const Books = ({ typeCode, typeName }) => {
  const {
    handleSubmit,
    register,
    reset,
    setValue,
    setError,
    formState: { errors },
  } = useForm<FormUpdate>();

  const {
    rootStore: { bookStore, typeStore },
  } = useStoreMobx();

  const booksData = bookStore.getBooksData;
  const deleteBookData = bookStore.getDeleteBookData;
  const editBookData = bookStore.getEditBookData;
  const editBookError = bookStore.getEditBookError;
  const isLoadingAction = bookStore.getIsLoadingAction;
  const isLoadingBooks = bookStore.getIsLoading;
  const [openDialogDelete, setOpenDialogDelete] = useState<boolean>(false);
  const [openDialogUpdate, setOpenDialogUpdate] = useState<boolean>(false);
  const [deleteValue, setDeleteValue] = useState<string>('');
  const [finalDelete, setFinalDelete] = useState<string>('');
  const [bookSelected, setBookSelected] = useState<any>({});

  useEffect(() => {
    bookStore.fetchAllBooksInType(typeCode);
  }, [typeCode]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFinalDelete(deleteValue);
    }, 500);
    return () => clearTimeout(timer);
  }, [deleteValue]);

  useEffect(() => {
    if (editBookError && editBookError.data) {
      setError('updateBook.name', { message: editBookError.data });
      setError('updateBook.author', { message: editBookError.data });
    }
  }, [editBookError]);

  const handleClickOpenDialogDelete = (book) => {
    setBookSelected(book);
    setOpenDialogDelete(true);
  };

  const handleCloseDialogDelete = () => {
    setOpenDialogDelete(false);
    setDeleteValue('');
    setBookSelected({});
  };

  const handleOpenDialogUpdate = (book) => {
    setValue('updateBook.name', book.bookName);
    setValue('updateBook.author', book.bookAuthor);
    setValue('updateBook.language', book.bookUseLanguage);
    setValue('updateBook.bookSource', book.bookSource);
    setValue('updateBook.poster', book.bookPoster);
    setValue('updateBook.describe', book.bookDescribe);
    setBookSelected(book);
    setOpenDialogUpdate(true);
  };

  const handleCloseDialogUpdate = () => {
    reset({
      updateBook: {
        name: '',
        author: '',
        language: '',
        poster: '',
        describe: '',
      },
    });
    setBookSelected({});
    bookStore.setResetEditBook();
    setOpenDialogUpdate(false);
  };

  const handleGetDeleteInput = (e) => {
    setDeleteValue(e.target.value);
  };

  const handleClickDeleteBook = () => {
    const bookTypeCode = typeCode;
    const bookId = bookSelected?.bookId;
    bookStore.fetchDeleteBook(bookTypeCode, bookId);
  };

  const handleLogin = () => {
    setOpenDialogDelete(false);
    setOpenDialogUpdate(false);
  };

  const handleSubmitUpdate = (updateValue) => {
    const bookName = updateValue.updateBook.name;
    const bookAuthor = updateValue.updateBook.author;
    const bookUseLanguage = updateValue.updateBook.language;
    const bookPoster = updateValue.updateBook.poster;
    const { bookSource } = updateValue.updateBook;
    const bookDescribe = updateValue.updateBook.describe;
    const bookType = typeName;
    const bookTypeCode = typeCode;
    const bookId = bookSelected.bookId;
    const updateData: UpdateBookForm = {
      bookName,
      bookAuthor,
      bookUseLanguage,
      bookPoster,
      bookSource,
      bookDescribe,
      bookType,
    };
    bookStore.fetchUpdateBook(bookTypeCode, bookId, updateData);
  };

  const handleExitSuccess = () => {
    setDeleteValue('');
    setBookSelected({});
    setOpenDialogDelete(false);
    setOpenDialogUpdate(false);
    bookStore.setResetDeleteBook();
    bookStore.setResetEditBook();
    bookStore.fetchAllBooksInType(typeCode);
  };

  return (
    <>
      <DetailBookContainer>
        <TypeBookContent>
          <div className="background" />
          {isLoadingBooks ? (
            <div className="loader-container">
              <div className="loader" />
            </div>
          ) : (
            <>
              {booksData[0]?.bookName ? (
                <ListBookContainer className="content">
                  {booksData &&
                    booksData[0] &&
                    booksData[0].bookName &&
                    booksData.map((book) => {
                      return (
                        <Tooltip
                          title={book.bookDescribe}
                          placement="top"
                          arrow
                          key={book.bookId}
                          componentsProps={{
                            tooltip: {
                              sx: {
                                backgroundColor: 'white',
                                color: 'black',
                                fontSize: '14px',
                                borderRadius: '8px',
                                padding: '8px 12px',
                                boxShadow: 3,
                              },
                            },
                          }}
                        >
                          <BookDetailItem>
                            <img src={book.bookPoster} alt="avt_book" />
                            <div className="content-book">
                              <p>
                                <span className="keyword-book">Name: </span>
                                <span>{book.bookName}</span>
                              </p>
                              <p>
                                <span className="keyword-book">Author: </span>
                                <span>{book.bookAuthor}</span>
                              </p>
                              <p>
                                <span className="keyword-book">Language: </span>
                                <span>{book.bookUseLanguage}</span>
                              </p>
                              <p>
                                <span className="keyword-book">Link: </span>
                                <a href={book.bookSource} target="blank">
                                  {book.bookSource}
                                </a>
                              </p>
                              <div className="action-contain">
                                <Button
                                  variant="contained"
                                  size="small"
                                  className="update"
                                  onClick={() => handleOpenDialogUpdate(book)}
                                >
                                  Update
                                </Button>
                                <Button
                                  variant="contained"
                                  size="small"
                                  className="delete"
                                  onClick={() =>
                                    handleClickOpenDialogDelete(book)
                                  }
                                >
                                  Delete
                                </Button>
                              </div>
                            </div>
                          </BookDetailItem>
                        </Tooltip>
                      );
                    })}
                </ListBookContainer>
              ) : (
                <WarnNoData warnText="books" />
              )}
            </>
          )}
        </TypeBookContent>
      </DetailBookContainer>

      {/* dialog delete book */}
      <DialogDeleteContainer
        open={openDialogDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="sm"
        fullWidth
      >
        {isHavingToken() ? (
          <>
            {deleteBookData && deleteBookData.data ? (
              <DialogSuccess>
                <h1>{`Book "${bookSelected.bookName} be deleted successful!!"`}</h1>
                <div>
                  <Button className="btn-exit" onClick={handleExitSuccess}>
                    Exit
                  </Button>
                </div>
              </DialogSuccess>
            ) : (
              <>
                <DialogContent id="alert-dialog-content">
                  <ErrorIcon className="icon-delete" />
                  <div className="content-dialog">
                    <h4>{`Delete Book ${bookSelected?.bookName}`}</h4>
                    <h5>
                      {`Are you sure you want to drop collection "${bookSelected?.bookName}"?`}
                    </h5>
                    <p>{`Type "${bookSelected?.bookName}" to confirm your action`}</p>
                    <input
                      value={deleteValue}
                      onChange={(e) => handleGetDeleteInput(e)}
                    />
                  </div>
                </DialogContent>
                {isLoadingAction && <Progress />}
                <DialogActions id="alert-dialog-action">
                  <Button
                    onClick={handleCloseDialogDelete}
                    className="btn-cancel"
                  >
                    Cancel
                  </Button>
                  <button
                    onClick={
                      finalDelete === bookSelected.bookName
                        ? handleClickDeleteBook
                        : null
                    }
                    className={
                      finalDelete === bookSelected.bookName
                        ? 'btn-delete-corr'
                        : 'btn-delete-err'
                    }
                    type="button"
                  >
                    Delete
                  </button>
                </DialogActions>
              </>
            )}
          </>
        ) : (
          <div className="login-container">
            <LogIn handleCloseLogin={handleLogin} />
          </div>
        )}
      </DialogDeleteContainer>

      {/* dialog update book */}
      <DialogUpdateContainer
        open={openDialogUpdate}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="sm"
        fullWidth
      >
        {isHavingToken() ? (
          <>
            {editBookData && editBookData.data ? (
              <DialogSuccess>
                <h1>{`Book "${bookSelected.bookName}" be updated successful`}</h1>
                <div>
                  <Button className="btn-exit" onClick={handleExitSuccess}>
                    Exit
                  </Button>
                </div>
              </DialogSuccess>
            ) : (
              <DialogContent id="alert-dialog-content">
                <BuildCircleIcon className="icon-update" />
                <form onSubmit={handleSubmit(handleSubmitUpdate)}>
                  <h4>{`Update ${bookSelected?.bookName}`}</h4>

                  <div>
                    <p>{`Book's Name: `}</p>
                    <input
                      placeholder={`Book's Name`}
                      {...register('updateBook.name', {
                        required: 'Do not empty!!',
                      })}
                    />
                    {errors?.updateBook?.name &&
                      errors?.updateBook?.name?.message && (
                        <span>{errors?.updateBook?.name?.message}</span>
                      )}
                  </div>
                  <div>
                    <p>{`Book's Author: `}</p>
                    <input
                      placeholder={`Book's Author`}
                      {...register('updateBook.author', {
                        required: 'Do not empty!!',
                      })}
                    />
                    {errors?.updateBook?.author &&
                      errors?.updateBook?.author?.message && (
                        <span>{errors?.updateBook?.author?.message}</span>
                      )}
                  </div>
                  <div>
                    <p>{`Book's Language: `}</p>
                    <input
                      placeholder={`Book's Language`}
                      {...register('updateBook.language', {
                        required: 'Do not empty!!',
                      })}
                    />
                    {errors?.updateBook?.language &&
                      errors?.updateBook?.language?.message && (
                        <span>{errors?.updateBook?.language?.message}</span>
                      )}
                  </div>
                  <div>
                    <p>{`Book's Source: `}</p>
                    <input
                      placeholder={`Book's Source`}
                      {...register('updateBook.bookSource', {
                        required: 'Do not empty!!',
                      })}
                    />
                    {errors?.updateBook?.bookSource &&
                      errors?.updateBook?.bookSource?.message && (
                        <span>{errors?.updateBook?.bookSource?.message}</span>
                      )}
                  </div>
                  <div>
                    <p>{`Book's Poster: `}</p>
                    <input
                      placeholder={`Book's Poster`}
                      {...register('updateBook.poster', {
                        required: 'Do not empty!!',
                      })}
                    />
                    {errors?.updateBook?.poster &&
                      errors?.updateBook?.poster?.message && (
                        <span>{errors?.updateBook?.poster?.message}</span>
                      )}
                  </div>
                  <div>
                    <p>{`Book's Describe: `}</p>
                    <textarea
                      name="message"
                      {...register('updateBook.describe', {
                        required: 'Do not empty!!',
                      })}
                      placeholder={`Book's Describe`}
                    />
                    {errors?.updateBook?.describe &&
                      errors?.updateBook?.describe?.message && (
                        <span>{errors?.updateBook?.describe?.message}</span>
                      )}
                  </div>
                  {isLoadingAction && <Progress />}

                  <div className="btn-container">
                    <Button
                      onClick={handleCloseDialogUpdate}
                      className="btn-cancel"
                    >
                      Cancel
                    </Button>
                    <Button className="btn-update" type="submit">
                      Save
                    </Button>
                  </div>
                </form>
              </DialogContent>
            )}
          </>
        ) : (
          <div className="login-container">
            <LogIn handleCloseLogin={handleLogin} />
          </div>
        )}
      </DialogUpdateContainer>
    </>
  );
};

export default React.memo(observer(Books));
