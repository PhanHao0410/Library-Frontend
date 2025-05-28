import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useForm } from 'react-hook-form';

import HomeIcon from '@mui/icons-material/Home';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';
import DialogContent from '@mui/material/DialogContent';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import WarningIcon from '@mui/icons-material/Warning';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import LoginIcon from '@mui/icons-material/Login';
import TimerComponent from '../../components/TimerComponent';
import { useStoreMobx } from '../../mobx/hook';
import { UpdateBookForm } from '../../types/Requests';
import Progress from '../../components/Progress';
import ShowPdf from '../ShowPdf';
import { isHavingToken, isTokenExpiry } from '../../utils/localStorage';
import history from '../../utils/history';
import path from '../../constants/clientPath';

import {
  EditBookContainer,
  TitleContainer,
  InfomationBookContainer,
  InfomationStatusContainer,
  StatusItemContain,
  SliderTimeContainer,
  TimeLineContainer,
  DialogUpdateContainer,
  DialogSuccess,
  DialogWarningContainer,
  ToolbarContainer,
  HeadRoomContainer,
} from './styles';
import LogIn from '../LogIn';

const STATUS = [
  { id: '1', title: 'Unread', color: 'rgb(199, 210, 254)' },
  { id: '2', title: 'Currently Reading', color: 'rgb(191,219,254)' },
  { id: '3', title: 'Read', color: 'rgb(167,243,208)' },
];

type FormUpdate = {
  updateBook: {
    name: string;
    author: string;
    language: string;
    bookSource: string;
    describe: string;
    poster: string;
    filePdf: File;
    nameFilePdf: string;
  };
};

const EditBook = () => {
  const {
    handleSubmit,
    register,
    reset,
    setValue,
    setError,
    formState: { errors },
  } = useForm<FormUpdate>();

  const {
    rootStore: { editBookStore, bookStore },
  } = useStoreMobx();
  const book = editBookStore.getBookData;
  const updateStatusData = editBookStore.getUpdateStatusData;
  const updateStatusError = editBookStore.getUpdateStatusError;
  const updateTimeData = editBookStore.getUpdateTimeData;
  const updateTimeError = editBookStore.getUpdateTimeError;
  const filePdfData = editBookStore.getFilePdfData;
  const isLoadingUpdate = bookStore.getIsLoadingUpdate;
  const updateBookData = bookStore.getEditBookData;
  const updateBookError = bookStore.getEditBookError;
  const isLoadingTime = editBookStore.getIsLoadingTime;
  const isLoadingFile = editBookStore.getIsLoadingFile;
  const isLoading = editBookStore.getIsLoading;

  const spentTimeRef = useRef('');
  const [isReading, setIsReading] = useState(false);
  const [openToolBar, setOpenToolBar] = useState<boolean>(false);
  const [bookData, setBookData] = useState<any>({});
  const [openFilePdf, setOpenFilePdf] = useState(false);
  const [openDialogUpdate, setOpenDialogUpdate] = useState<boolean>(false);
  const [openDialogWarning, setOpenDialogWarning] = useState<boolean>(false);
  const [openDialogSuccess, setOpenDialogSuccess] = useState<boolean>(false);
  const [openDialogLogin, setOpenDialogLogin] = useState<boolean>(false);
  const [disableBtnChooseFile, setDisableBtnChooseFile] =
    useState<boolean>(false);

  const typeCode = useParams().typecode;
  const bookId = useParams().bookid;

  useEffect(() => {
    editBookStore.fetchGetBookSingle(typeCode, bookId);
  }, [typeCode, bookId]);

  useEffect(() => {
    if (updateStatusError.status || updateTimeError.status)
      setOpenDialogWarning(true);
    if (updateStatusData.status || updateTimeData.status || updateBookData.data)
      setOpenDialogSuccess(true);
    if (updateBookError?.data?.statusCode === 409) {
      setError('updateBook.name', { message: updateBookError?.data?.message });
      setError('updateBook.author', {
        message: updateBookError?.data?.message,
      });
    }
    if (updateBookError?.data?.statusCode === 413) {
      setError('updateBook.nameFilePdf', {
        message: updateBookError?.data?.message,
      });
      setError('updateBook.filePdf', {
        message: updateBookError?.data?.message,
      });
    }
    if (updateBookError?.status === 403) {
      setError('updateBook.nameFilePdf', {
        message: 'The PDF file must not be empty',
      });
      setError('updateBook.filePdf', {
        message: 'The PDF file must not be empty',
      });
    }
  }, [updateStatusError, updateTimeError, updateTimeData, updateBookError]);

  useEffect(() => {
    setBookData(book);
    if (book.bookFileId) {
      const fileId = book.bookFileId;
      editBookStore.fetchGetFilePDF(fileId);
    }
  }, [book]);

  useEffect(() => {
    const file = new File([filePdfData], 'ten-tai-lieu.pdf', {
      type: filePdfData.type,
      lastModified: new Date().getTime(),
    });
    if (file.size > 0) {
      setDisableBtnChooseFile(false);
    } else {
      setDisableBtnChooseFile(true);
    }
  }, [filePdfData]);

  const handleToggle = () => setOpenToolBar((prev) => !prev);

  const hadleClikBackHome = () => {
    setOpenToolBar(false);
    history.push(path.ROOT);
  };

  const onDragEnd = async (result) => {
    if (!result.destination) {
      return;
    }
    let newStatus = '';
    let newStatusCode = '';

    switch (result.destination.droppableId) {
      case '1':
        newStatus = 'Unread';
        newStatusCode = '1';
        break;
      case '2':
        newStatus = 'Currently Reading';
        newStatusCode = '2';
        break;
      case '3':
        newStatus = 'Read';
        newStatusCode = '3';
        break;
      default:
        return;
    }

    setBookData((prevState) => ({
      ...prevState,
      bookStatus: newStatus,
      bookStatusCode: newStatusCode,
    }));

    try {
      await editBookStore.fetchUpdateStatus(typeCode, bookId, {
        bookStatus: newStatus,
        bookStatusCode: newStatusCode,
      });
    } catch (error) {
      setBookData((prevState) => ({
        ...prevState,
        bookStatus: prevState.bookStatus,
        bookStatusCode: prevState.bookStatusCode,
      }));
    }
  };

  const handleChangeExpectTime = () => {
    if (Number(spentTimeRef.current) < Number(bookData.spentTime)) {
      alert('Time expect cannot smaller spentTime');
      return;
    }
    const expectedTime = spentTimeRef.current;
    const spentTime = bookData.spentTime;

    editBookStore.fetchUpdateTime(typeCode, bookId, {
      expectedTime,
      spentTime,
    });
  };

  const handleTimeStop = (timeReading) => {
    if (Number(timeReading) > 0) {
      const expectedTime = bookData.expectedTime;
      const spentTime = (
        Number(bookData.spentTime) +
        Number(timeReading) / 3600
      ).toFixed(8);
      if (Number(spentTime) > Number(bookData.expectedTime)) {
        alert('Hãy gia hạn thêm giờ ước định');
      } else {
        editBookStore.fetchUpdateTime(typeCode, bookId, {
          expectedTime,
          spentTime,
        });
      }
    }
  };

  const handleClickGetfilePdf = () => {
    setOpenFilePdf(true);
  };

  const handleExitSuccess = () => {
    editBookStore.fetchGetBookSingle(typeCode, bookId);
    setOpenDialogUpdate(false);
    bookStore.setResetEditBook();
  };

  const handleOpenDialogUpdate = () => {
    const file = new File([filePdfData], `${bookData.bookName}.pdf`, {
      type: 'application/pdf',
    });
    setValue('updateBook.name', bookData.bookName);
    setValue('updateBook.author', bookData.bookAuthor);
    setValue('updateBook.language', bookData.bookUseLanguage);
    setValue('updateBook.bookSource', bookData.bookSource);
    setValue('updateBook.poster', bookData.bookPoster);
    setValue('updateBook.describe', bookData.bookDescribe);
    setValue('updateBook.filePdf', file);
    setValue('updateBook.nameFilePdf', file.name);
    setOpenDialogUpdate(true);
    setOpenToolBar(false);
  };

  const handleCloseDialogUpdate = () => {
    reset({
      updateBook: {
        name: '',
        author: '',
        language: '',
        poster: '',
        describe: '',
        bookSource: '',
        filePdf: null,
        nameFilePdf: '',
      },
    });
    bookStore.setResetEditBook();
    setDisableBtnChooseFile(false);
    setOpenDialogUpdate(false);
  };

  const handleSubmitUpdate = (updateValue) => {
    let file = null;
    if (updateValue.updateBook.filePdf?.length >= 1) {
      file = updateValue.updateBook.filePdf[0];
    } else {
      const emptyBlob = new Blob([], { type: 'application/pdf' });
      const emptyFile = new File([emptyBlob], 'empty.pdf', {
        type: 'application/pdf',
      });
      file = emptyFile;
    }
    const bookName = updateValue.updateBook.name;
    const bookAuthor = updateValue.updateBook.author;
    const bookUseLanguage = updateValue.updateBook.language;
    const bookPoster = updateValue.updateBook.poster;
    const { bookSource } = updateValue.updateBook;
    const bookDescribe = updateValue.updateBook.describe;
    const bookType = bookData.bookType;
    const bookTypeCode = typeCode;

    const { bookStatus, bookStatusCode, expectedTime, spentTime } = bookData;
    const updateBook: UpdateBookForm = {
      bookName,
      bookAuthor,
      bookUseLanguage,
      bookPoster,
      bookSource,
      bookDescribe,
      bookType,
      bookStatus,
      bookStatusCode,
      expectedTime,
      spentTime,
    };
    bookStore.fetchUpdateBook(bookTypeCode, bookId, updateBook, file);
  };

  const handleExitDialogWarning = () => {
    editBookStore.fetchGetBookSingle(typeCode, bookId);
    editBookStore.setResetUpdateStatus();
    editBookStore.setResetUpdateTime();
    bookStore.setResetEditBook();
    setOpenDialogWarning(false);
    setOpenDialogSuccess(false);
  };

  const handleClickHereLogIn = () => {
    editBookStore.fetchGetBookSingle(typeCode, bookId);
    setOpenDialogWarning(false);
    editBookStore.setResetUpdateStatus();
    editBookStore.setResetUpdateTime();
    setOpenDialogLogin(true);
  };

  return (
    <>
      <EditBookContainer>
        <HeadRoomContainer pinStart={100}>
          <TitleContainer>
            <div className="type-book">
              <img
                src={bookData && bookData.bookPoster && bookData.bookPoster}
                alt="avt_type_book"
              />
              <p>
                {bookData && bookData.bookName
                  ? bookData.bookName
                  : 'Book name'}
              </p>
            </div>
            {isLoading && <span className="loader-contain" />}
          </TitleContainer>
        </HeadRoomContainer>
        {bookData && bookData.bookName && (
          <>
            <DragDropContext onDragEnd={onDragEnd}>
              <h1 className="status-first">Status</h1>
              <InfomationStatusContainer className="custome-center">
                <div className="contain">
                  {STATUS.map((status) => (
                    <Droppable key={status.id} droppableId={status.id}>
                      {(provided) => (
                        <StatusItemContain
                          ref={provided.innerRef}
                          {...provided.droppableProps}
                        >
                          <div
                            className="title-status"
                            style={{ backgroundColor: `${status.color}` }}
                          >
                            {status.title}
                          </div>
                          {bookData.bookStatusCode === status.id && (
                            <Draggable
                              key={bookData.bookStatusCode}
                              draggableId={bookData.bookStatusCode}
                              index={0}
                            >
                              {(provided) => (
                                <div
                                  className="content-status"
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  <img
                                    src={bookData.bookPoster}
                                    alt="avt_book"
                                  />
                                  <h3 className="name-book">
                                    {bookData.bookName}
                                  </h3>
                                </div>
                              )}
                            </Draggable>
                          )}
                        </StatusItemContain>
                      )}
                    </Droppable>
                  ))}
                </div>
              </InfomationStatusContainer>
            </DragDropContext>
            <TimeLineContainer>
              <h1 className="status">Time line</h1>
              <SliderTimeContainer>
                <Box sx={{ width: '100%' }}>
                  <Slider
                    step={10}
                    value={Number(bookData.spentTime)}
                    valueLabelDisplay="auto"
                    min={0}
                    max={Number(bookData.expectedTime)}
                    disableSwap
                  />
                  <Box
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: '600',
                        textAlign: 'center',
                      }}
                    >
                      <div className="anotion-timer">
                        <span>{bookData.spentTime}</span>
                        <span>hour</span>
                        <p>Spent Time</p>
                      </div>
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: '600', textAlign: 'center' }}
                    >
                      <div className="anotion-timer">
                        <span>{bookData.expectedTime}</span>
                        <span>hour</span>
                        <p>Expected Time</p>
                      </div>
                    </Typography>
                  </Box>
                </Box>
                <div className="timer-contain">
                  <div className="timer-component">
                    <TimerComponent
                      isReading={isReading}
                      handleTimeStop={handleTimeStop}
                    />
                  </div>
                </div>
                <div className="changetime-container">
                  <div className="change-expect">
                    <h2>Change Expected Time</h2>
                    <div className="action-container">
                      <input
                        type="number"
                        onChange={(e) => {
                          spentTimeRef.current = e.target.value;
                        }}
                      />
                      {isLoadingTime ? (
                        <span className="loader-contain" />
                      ) : (
                        <Button
                          className="action-expect"
                          onClick={handleChangeExpectTime}
                        >
                          SAVE
                        </Button>
                      )}
                    </div>
                  </div>
                  <div className="action-read">
                    <h2>{isReading ? `Stop Read` : `Start Read`}</h2>
                    <div className="action-contain">
                      {isLoadingFile ? (
                        <span className="loader-contain" />
                      ) : (
                        <Button
                          className="action-pause action-start"
                          onClick={handleClickGetfilePdf}
                        >
                          Read
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </SliderTimeContainer>
            </TimeLineContainer>
            <InfomationBookContainer>
              <h1 className="status">Information</h1>
              <ul className="content-contain">
                <li>
                  <p className="content-span">{bookData.bookName}</p>
                </li>
                <li>
                  <p className="content-span">{bookData.bookAuthor}</p>
                </li>
                <li>
                  <p className="content-span">{bookData.bookUseLanguage}</p>
                </li>
                <li>
                  <p className="content-span">{bookData.bookDescribe}</p>
                </li>
              </ul>
            </InfomationBookContainer>
          </>
        )}
        <ToolbarContainer>
          <Box
            sx={{
              height: '100vh',
              transform: 'translateZ(0px)',
              flexGrow: 1,
            }}
          >
            <Backdrop open={openToolBar} />
            {isHavingToken() && isTokenExpiry() ? (
              <SpeedDial
                ariaLabel="SpeedDial tooltip example"
                sx={{
                  position: 'absolute',
                  bottom: 10,
                  right: 10,
                  '& .MuiFab-primary': {
                    backgroundColor: 'rgb(218,57,43)',
                    color: '#fff',
                    '&:hover': {
                      backgroundColor: 'RGB(157 46 36)',
                    },
                  },
                }}
                icon={<SpeedDialIcon />}
                onClose={() => setOpenToolBar(false)}
                onClick={handleToggle}
                open={openToolBar}
                onOpen={() => {}}
              >
                <SpeedDialAction
                  key="home"
                  icon={<HomeIcon />}
                  tooltipTitle="Home"
                  tooltipOpen
                  onClick={hadleClikBackHome}
                />
                <SpeedDialAction
                  key="update"
                  icon={<ConstructionIcon />}
                  tooltipTitle="Update"
                  tooltipOpen
                  onClick={handleOpenDialogUpdate}
                />
              </SpeedDial>
            ) : (
              <SpeedDial
                ariaLabel="SpeedDial tooltip example"
                sx={{
                  position: 'absolute',
                  bottom: 10,
                  right: 10,
                  '& .MuiFab-primary': {
                    backgroundColor: 'rgb(218,57,43)',
                    color: '#fff',
                    '&:hover': {
                      backgroundColor: 'RGB(157 46 36)',
                    },
                  },
                }}
                icon={<SpeedDialIcon />}
                onClose={() => setOpenToolBar(false)}
                onClick={handleToggle}
                open={openToolBar}
                onOpen={() => {}}
              >
                <SpeedDialAction
                  key="home"
                  icon={<HomeIcon />}
                  tooltipTitle="Home"
                  tooltipOpen
                  onClick={hadleClikBackHome}
                />
                <SpeedDialAction
                  key="logIn"
                  icon={<LoginIcon />}
                  tooltipTitle="Logn In"
                  tooltipOpen
                  onClick={() => setOpenDialogLogin(true)}
                />
                ,
              </SpeedDial>
            )}
          </Box>
        </ToolbarContainer>
      </EditBookContainer>
      <ShowPdf
        openFilePdf={openFilePdf}
        setOpenFilePdf={setOpenFilePdf}
        bookData={bookData}
        filePdfData={filePdfData}
        typeCode={typeCode}
        bookId={bookId}
      />
      <LogIn
        openDialogLogin={openDialogLogin}
        setOpenDialogLogin={setOpenDialogLogin}
      />

      {/* Dialog update infomation */}
      <DialogUpdateContainer
        open={openDialogUpdate}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="sm"
        fullWidth
      >
        {updateBookData && updateBookData.data ? (
          <DialogSuccess>
            <h1>{`Book "${bookData.bookName}" be updated successful`}</h1>
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
              <h4>{`Update ${bookData?.bookName}`}</h4>

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
              <div>
                <p>{`Book's FilePdf: `}</p>
                {!disableBtnChooseFile ? (
                  <>
                    <input
                      type="text"
                      disabled
                      {...register('updateBook.nameFilePdf', {})}
                      placeholder={`Book's FilePdf`}
                    />
                    {errors?.updateBook?.nameFilePdf &&
                      errors?.updateBook?.nameFilePdf?.message && (
                        <span style={{ display: 'block' }}>
                          {errors?.updateBook?.nameFilePdf?.message}
                        </span>
                      )}
                    <Button
                      className="btn-convert-file"
                      onClick={() => setDisableBtnChooseFile(true)}
                    >
                      Converted File
                    </Button>
                  </>
                ) : (
                  <>
                    <input
                      type="file"
                      accept="application/pdf"
                      {...register('updateBook.filePdf', {})}
                      placeholder={`Book's FilePdf`}
                    />
                    {errors?.updateBook?.filePdf &&
                      errors?.updateBook?.filePdf?.message && (
                        <span>{errors?.updateBook?.filePdf?.message}</span>
                      )}
                  </>
                )}
              </div>
              {isLoadingUpdate && <Progress />}

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
      </DialogUpdateContainer>

      {/* Dialog warning */}
      <DialogWarningContainer
        open={openDialogWarning}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="xs"
        fullWidth
      >
        <DialogContent id="dialog-warning-content">
          <div className="dialog-title">
            <WarningIcon className="icon-warning" />
            <h2>You cannot update. Please login</h2>
          </div>
          <h4 onClick={handleClickHereLogIn} role="presentation">
            Click here to log in
          </h4>
          <div className="btn-action">
            <Button className="btn" onClick={handleExitDialogWarning}>
              Exit
            </Button>
          </div>
        </DialogContent>
      </DialogWarningContainer>

      {/* Dialog Success */}
      <DialogWarningContainer
        open={openDialogSuccess}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="xs"
        fullWidth
      >
        <DialogContent id="dialog-success-content">
          <div className="success-checkmark">
            <div className="check-icon">
              <span className="icon-line line-tip" />
              <span className="icon-line line-long" />
              <div className="icon-circle" />
              <div className="icon-fix" />
            </div>
          </div>
          <h2>You have successfully updated.</h2>
          <div className="btn-action">
            <Button className="btn" onClick={handleExitDialogWarning}>
              Exit
            </Button>
          </div>
        </DialogContent>
      </DialogWarningContainer>
    </>
  );
};

export default observer(EditBook);
