import React, { useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useForm } from 'react-hook-form';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import ErrorIcon from '@mui/icons-material/Error';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import { useMediaQuery } from '@mui/material';
import { useStoreMobx } from '../../mobx/hook';
import LogIn from '../LogIn';
import { isHavingToken, isTokenExpiry } from '../../utils/localStorage';
import { UpdateBookForm } from '../../types/Requests';
import Progress from '../../components/Progress';
import WarnNoData from '../../components/WarnNoData';
import history from '../../utils/history';
import {
  DetailBookContainer,
  TypeBookContent,
  ListBookContainer,
  BookDetailItem,
  DialogDeleteContainer,
  DialogUpdateContainer,
  DialogSuccess,
  BookContainer,
  TitleTopicContain,
} from './styles';

const Books = ({ typeCode, typeName, openDialogLogin }) => {
  const {
    rootStore: { bookStore },
  } = useStoreMobx();

  const booksData = bookStore.getBooksData;
  const deleteBookData = bookStore.getDeleteBookData;
  const isLoadingUpdate = bookStore.getIsLoadingUpdate;
  const isLoadingBooks = bookStore.getIsLoading;
  const [openDialogDelete, setOpenDialogDelete] = useState<boolean>(false);
  const [deleteValue, setDeleteValue] = useState<string>('');
  const [finalDelete, setFinalDelete] = useState<string>('');
  const [bookSelected, setBookSelected] = useState<any>({});
  const matchesMaxSm = useMediaQuery('(max-width:600px)');

  useEffect(() => {
    bookStore.fetchAllBooksInType(typeCode);
  }, [typeCode]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFinalDelete(deleteValue);
    }, 500);
    return () => clearTimeout(timer);
  }, [deleteValue]);

  const handleClickOpenDialogDelete = (book) => {
    setBookSelected(book);
    setOpenDialogDelete(true);
  };

  const handleCloseDialogDelete = () => {
    setOpenDialogDelete(false);
    setDeleteValue('');
    setBookSelected({});
  };

  const handleGetDeleteInput = (e) => {
    setDeleteValue(e.target.value);
  };

  const handleClickDeleteBook = () => {
    const bookTypeCode = typeCode;
    const bookId = bookSelected?.bookId;
    bookStore.fetchDeleteBook(bookTypeCode, bookId);
  };

  const handleExitSuccess = () => {
    setDeleteValue('');
    setBookSelected({});
    setOpenDialogDelete(false);
    bookStore.setResetDeleteBook();
    bookStore.fetchAllBooksInType(typeCode);
  };

  return (
    <>
      <DetailBookContainer>
        <TypeBookContent>
          <div className="background" />
          <TitleTopicContain>
            <div className="test-border" />
            <h1 className="title-topic">books</h1>
            <div className="test-border" />
          </TitleTopicContain>
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
                          placement={matchesMaxSm ? 'top' : 'left'}
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
                          <BookContainer key={book.bookId}>
                            <div className="book-container">
                              <div
                                className="book"
                                onClick={() =>
                                  history.push(
                                    `/${typeCode}/edit-book/${book.bookId}`,
                                  )
                                }
                                role="presentation"
                              >
                                <div
                                  className="book-cover"
                                  style={{
                                    backgroundImage: `url(${book.bookPoster})`,
                                  }}
                                />
                                <div className="book-pages" />
                                <div className="book-back" />
                              </div>
                              <h1>{book.bookName}</h1>
                              {book.bookStatusCode === '1' && (
                                <h3 style={{ color: 'red' }}>
                                  {book.bookStatus}
                                </h3>
                              )}
                              {book.bookStatusCode === '2' && (
                                <h3 style={{ color: 'RGB(129 152 247)' }}>
                                  {book.bookStatus}
                                </h3>
                              )}
                              {book.bookStatusCode === '3' && (
                                <h3 style={{ color: 'RGB(12 143 82)' }}>
                                  {book.bookStatus}
                                </h3>
                              )}
                              {isHavingToken() && isTokenExpiry() && (
                                <div className="action-contain">
                                  <Button
                                    variant="contained"
                                    size="small"
                                    className="update"
                                    onClick={() =>
                                      history.push(
                                        `/${typeCode}/edit-book/${book.bookId}`,
                                      )
                                    }
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
                              )}
                            </div>
                          </BookContainer>
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
            {isLoadingUpdate && <Progress />}
            <DialogActions id="alert-dialog-action">
              <Button onClick={handleCloseDialogDelete} className="btn-cancel">
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
      </DialogDeleteContainer>
    </>
  );
};

export default React.memo(observer(Books));
