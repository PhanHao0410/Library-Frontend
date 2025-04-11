import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import ErrorIcon from '@mui/icons-material/Error';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import {
  DetailBookContainer,
  TypeBookContent,
  ListBookContainer,
  BookDetailItem,
  DialogDeleteContainer,
  DialogUpdateContainer,
} from './styles';

const textCheck: string = 'oplog.rs';
type FormUpdate = {
  updateBook: {
    name: string;
    author: string;
    language: string;
    bookType: string;
    bookSource: string;
    describe: string;
  };
};

const Books = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormUpdate>();

  const [openDialogDelete, setOpenDialogDelete] = useState<boolean>(false);
  const [openDialogUpdate, setOpenDialogUpdate] = useState<boolean>(false);
  const [deleteValue, setDeleteValue] = useState<string>('');
  const [finalDelete, setFinalDelete] = useState<string>('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setFinalDelete(deleteValue);
    }, 500);
    return () => clearTimeout(timer);
  }, [deleteValue]);

  const handleClickOpenDialogDelete = () => {
    setOpenDialogDelete(true);
  };

  const handleCloseDialogDelete = () => {
    setOpenDialogDelete(false);
    setDeleteValue('');
  };

  const handleOpenDialogUpdate = () => {
    setOpenDialogUpdate(true);
  };

  const handleCloseDialogUpdate = () => {
    reset({
      updateBook: {
        name: '',
        author: '',
        language: '',
        bookType: '',
        describe: '',
      },
    });
    setOpenDialogUpdate(false);
  };

  const handleGetDeleteInput = (e) => {
    setDeleteValue(e.target.value);
  };

  const handleSubmitUpdate = (updateValue) => {
    console.log('check book update: ', updateValue.updateBook);
  };

  return (
    <>
      <DetailBookContainer>
        <TypeBookContent>
          <div className="background" />
          <ListBookContainer className="content">
            <Tooltip
              title="check nội dung đfjsd f djfdsjf sdkfjsdkfj sdjfsdklfjdslkfjdskljfksdlfjdskjfdskfjđkfjdklfjklsfjkdsf"
              placement="top"
              arrow
            >
              <BookDetailItem>
                <img
                  src="https://tse1.mm.bing.net/th?id=OIP.9rcByhvx0oI89plRVOnXdQAAAA&pid=Api&P=0&h=220"
                  alt="avt_book"
                />
                <div className="content-book">
                  <p>
                    <span className="keyword-book">Name: </span>
                    <span>Data structures</span>
                  </p>
                  <p>
                    <span className="keyword-book">Author: </span>
                    <span>Data structures</span>
                  </p>
                  <p>
                    <span className="keyword-book">Language: </span>
                    <span>Data structures</span>
                  </p>
                  <p>
                    <span className="keyword-book">Link: </span>
                    <span>Data structures</span>
                  </p>
                  <div className="action-contain">
                    <Button
                      variant="contained"
                      size="small"
                      className="update"
                      onClick={handleOpenDialogUpdate}
                    >
                      Update
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      className="delete"
                      onClick={handleClickOpenDialogDelete}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </BookDetailItem>
            </Tooltip>
            <Tooltip
              title="check nội dung đfjsd f djfdsjf sdkfjsdkfj sdjfsdklfjdslkfjdskljfksdlfjdskjfdskfjđkfjdklfjklsfjkdsf"
              placement="top"
              arrow
            >
              <BookDetailItem>
                <img
                  src="https://tse1.mm.bing.net/th?id=OIP.9rcByhvx0oI89plRVOnXdQAAAA&pid=Api&P=0&h=220"
                  alt="avt_book"
                />
                <div className="content-book">
                  <p>
                    <span className="keyword-book">Name: </span>
                    <span>Data structures</span>
                  </p>
                  <p>
                    <span className="keyword-book">Author: </span>
                    <span>Data structures</span>
                  </p>
                  <p>
                    <span className="keyword-book">Language: </span>
                    <span>Data structures</span>
                  </p>
                  <p>
                    <span className="keyword-book">Link: </span>
                    <span>Data structures</span>
                  </p>
                  <div className="action-contain">
                    <Button
                      variant="contained"
                      size="small"
                      className="update"
                      onClick={handleOpenDialogUpdate}
                    >
                      Update
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      className="delete"
                      onClick={handleClickOpenDialogDelete}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </BookDetailItem>
            </Tooltip>
            <Tooltip
              title="check nội dung đfjsd f djfdsjf sdkfjsdkfj sdjfsdklfjdslkfjdskljfksdlfjdskjfdskfjđkfjdklfjklsfjkdsf"
              placement="top"
              arrow
            >
              <BookDetailItem>
                <img
                  src="https://tse1.mm.bing.net/th?id=OIP.9rcByhvx0oI89plRVOnXdQAAAA&pid=Api&P=0&h=220"
                  alt="avt_book"
                />
                <div className="content-book">
                  <p>
                    <span className="keyword-book">Name: </span>
                    <span>Data structures</span>
                  </p>
                  <p>
                    <span className="keyword-book">Author: </span>
                    <span>Data structures</span>
                  </p>
                  <p>
                    <span className="keyword-book">Language: </span>
                    <span>Data structures</span>
                  </p>
                  <p>
                    <span className="keyword-book">Link: </span>
                    <span>Data structures</span>
                  </p>
                  <div className="action-contain">
                    <Button
                      variant="contained"
                      size="small"
                      className="update"
                      onClick={handleOpenDialogUpdate}
                    >
                      Update
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      className="delete"
                      onClick={handleClickOpenDialogDelete}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </BookDetailItem>
            </Tooltip>
          </ListBookContainer>
        </TypeBookContent>
      </DetailBookContainer>
      <DialogDeleteContainer
        open={openDialogDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="sm"
        fullWidth
      >
        <DialogContent id="alert-dialog-content">
          <ErrorIcon className="icon-delete" />
          <div className="content-dialog">
            <h4>Delete Book Data Structures</h4>
            <h5>
              {`Are you sure you want to drop collection "local.oplog.rs"?`}
            </h5>
            <p>{`Type "oplog.rs" to confirm your action`}</p>
            <input
              value={deleteValue}
              onChange={(e) => handleGetDeleteInput(e)}
            />
          </div>
        </DialogContent>
        <DialogActions id="alert-dialog-action">
          <Button onClick={handleCloseDialogDelete} className="btn-cancel">
            Cancel
          </Button>
          <button
            onClick={finalDelete === textCheck ? handleCloseDialogDelete : null}
            className={
              finalDelete === textCheck ? 'btn-delete-corr' : 'btn-delete-err'
            }
            type="button"
          >
            Delete
          </button>
        </DialogActions>
      </DialogDeleteContainer>
      <DialogUpdateContainer
        open={openDialogUpdate}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="sm"
        fullWidth
      >
        <DialogContent id="alert-dialog-content">
          <BuildCircleIcon className="icon-update" />
          <form onSubmit={handleSubmit(handleSubmitUpdate)}>
            <h4>Update Book Data Structures</h4>
            <div>
              <p>{`Book's Name: `}</p>
              <input
                placeholder={`Book's Name`}
                {...register('updateBook.name', {
                  required: 'Do not empty!!',
                })}
              />
              {errors?.updateBook?.name &&
                errors?.updateBook?.name?.message && <span>Do not empty</span>}
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
                  <span>Do not empty</span>
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
                  <span>Do not empty</span>
                )}
            </div>
            <div>
              <p>{`Book's Type: `}</p>
              <input
                placeholder={`Book's Type`}
                {...register('updateBook.bookType', {
                  required: 'Do not empty!!',
                })}
              />
              {errors?.updateBook?.bookType &&
                errors?.updateBook?.bookType?.message && (
                  <span>Do not empty</span>
                )}
            </div>
            <div>
              <p>{`Book's Surce: `}</p>
              <input
                placeholder={`Book's Source`}
                {...register('updateBook.bookSource', {
                  required: 'Do not empty!!',
                })}
              />
              {errors?.updateBook?.bookSource &&
                errors?.updateBook?.bookSource?.message && (
                  <span>Do not empty</span>
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
                  <span>Do not empty</span>
                )}
            </div>
            <div className="btn-container">
              <Button onClick={handleCloseDialogUpdate} className="btn-cancel">
                Cancel
              </Button>
              <Button
                // onClick={handleCloseDialogUpdate}
                className="btn-update"
                type="submit"
              >
                Save
              </Button>
            </div>
          </form>
        </DialogContent>
      </DialogUpdateContainer>
    </>
  );
};

export default Books;
