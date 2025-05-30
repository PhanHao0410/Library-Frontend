import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { observer } from 'mobx-react-lite';
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import AddBoxIcon from '@mui/icons-material/AddBox';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PoolIcon from '@mui/icons-material/Pool';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import LoginIcon from '@mui/icons-material/Login';
import { Tooltip } from '@mui/material';

import history from '../../utils/history';
import path from '../../constants/clientPath';
import Books from '../Books';
import Practices from '../Practices';
import LogIn from '../LogIn';
import { useStoreMobx } from '../../mobx/hook';
import { CreateBookForm, CreatePracticeForm } from '../../types/Requests';
import { isHavingToken } from '../../utils/localStorage';
import Progress from '../../components/Progress';
import Footer from '../../components/Footer';

import {
  DetailTypeContainer,
  TitleContainer,
  ToolbarContainer,
  DialogCreateContainer,
  DialogSuccess,
  HeadRoomContainer,
} from './styles';

type FormCreate = {
  createBook: {
    name: string;
    author: string;
    language: string;
    bookType: string;
    describe: string;
    poster: string;
    linkCource: string;
    expectedTime: number;
    filePdf: File;
  };
};

type FormCreatePractice = {
  createPractice: {
    practiceName: string;
    practiceLink: string;
    practiceDescribe: string;
  };
};

const DetailTypes = ({ match }) => {
  const {
    rootStore: { typeStore, practicesStore, bookStore },
  } = useStoreMobx();
  const {
    handleSubmit: handleSubmitCreate,
    register: registerCreate,
    reset: resetCreate,
    setError: setErrorCreate,
    formState: { errors: errorsCreate },
  } = useForm<FormCreate>();
  const {
    handleSubmit,
    register,
    reset,
    setError,
    formState: { errors },
  } = useForm<FormCreatePractice>();
  const isLoadingAdd = typeStore.getIsLoadingAdd;
  const isLoadindType = typeStore.getIsLoading;
  const isLoadingBook = bookStore.getIsLoading;
  const isLoadingPractice = practicesStore.getIsLoading;
  const dataType = typeStore.getTypeData;
  const adBookData = typeStore.getAddBookData;
  const adBookError = typeStore.getAddBookError;
  const adPracticeData = typeStore.getAddpracticeData;
  const adPracticeError = typeStore.getAddPracticeError;
  const [open, setOpen] = useState<boolean>(false);
  const [openDialogCreate, setOpenDialogCreate] = useState<boolean>(false);
  const [openDialogCreatePractice, setOpenDialogCreatePractice] =
    useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(false);
  const [openDialogLogin, setOpenDialogLogin] = useState<boolean>(false);
  const typeCode = match.params.typecode;

  useEffect(() => {
    typeStore.fetchTypeData(typeCode);
  }, [typeCode]);

  useEffect(() => {
    if (adBookError?.data?.statusCode === 409) {
      setErrorCreate('createBook.name', {
        message: adBookError?.data?.message,
      });
      setErrorCreate('createBook.author', {
        message: adBookError?.data?.message,
      });
    }
    if (adBookError?.status === 403) {
      setErrorCreate('createBook.filePdf', { message: 'Book file Pdf empty' });
    }
    if (adBookError?.data?.statusCode === 413) {
      setErrorCreate('createBook.filePdf', {
        message: adBookError?.data?.message,
      });
    }
    if (adPracticeError && adPracticeError.data) {
      setError('createPractice.practiceName', {
        message: adPracticeError?.data,
      });
      setError('createPractice.practiceLink', {
        message: adPracticeError?.data,
      });
    }
  }, [adBookError, adPracticeError]);

  const handleToggle = () => setOpen((prev) => !prev);

  const hadleClikBackHome = () => {
    setOpen(false);
    history.push(path.ROOT);
  };

  const handleOpenDialogCreate = () => {
    setOpen(false);
    setOpenDialogCreate(true);
  };

  const handleCloseDialogCreate = () => {
    setOpenDialogCreate(false);
    resetCreate({
      createBook: {
        name: '',
        author: '',
        language: '',
        bookType: '',
        describe: '',
        poster: '',
        linkCource: '',
        expectedTime: 0,
        filePdf: null,
      },
    });
    typeStore.setResetAddBook();
  };

  const handleOpenCreatePractice = () => {
    setOpen(false);
    setOpenDialogCreatePractice(true);
  };

  const handleCloseCreatePractice = () => {
    setOpenDialogCreatePractice(false);
    reset({
      createPractice: {
        practiceName: '',
        practiceLink: '',
        practiceDescribe: '',
      },
    });
    typeStore.setResetAddPractice();
  };

  const handleExitSuccess = () => {
    setOpenDialogCreate(false);
    setOpenDialogCreatePractice(false);
    reset({
      createPractice: {
        practiceName: '',
        practiceLink: '',
        practiceDescribe: '',
      },
    });
    resetCreate({
      createBook: {
        name: '',
        author: '',
        language: '',
        bookType: '',
        describe: '',
        poster: '',
        linkCource: '',
        expectedTime: 0,
        filePdf: null,
      },
    });
    typeStore.setResetAddBook();
    typeStore.setResetAddPractice();
    if (toggle) {
      practicesStore.fetchAllPracticesByTypeCode(typeCode);
    } else {
      bookStore.fetchAllBooksInType(typeCode);
    }
  };

  const handleSubmitCreateBook = (createValue) => {
    const bookName = createValue.createBook.name;
    const bookAuthor = createValue.createBook.author;
    const bookUseLanguage = createValue.createBook.language;
    const bookPoster = createValue.createBook.poster;
    const bookSource = createValue.createBook.linkCource;
    const bookType = dataType?.typeName;
    const bookDescribe = createValue.createBook.describe;
    const bookTypeCode = typeCode;
    const bookStatus = 'Unread';
    const bookStatusCode = '1';
    const expectedTime = createValue.createBook.expectedTime.toString;
    const spentTime = '0';
    const file = createValue.createBook.filePdf[0];
    const addBook: CreateBookForm = {
      bookName,
      bookAuthor,
      bookUseLanguage,
      bookPoster,
      bookSource,
      bookType,
      bookDescribe,
      bookStatus,
      bookStatusCode,
      expectedTime,
      spentTime,
    };
    typeStore.fetchAddBook(bookTypeCode, addBook, file);
  };

  const handleCreatePractice = (practiceValue) => {
    const practiceTypeCode = typeCode;
    const { practiceDescribe } = practiceValue.createPractice;
    const { practiceName } = practiceValue.createPractice;
    const { practiceLink } = practiceValue.createPractice;
    const addPractice: CreatePracticeForm = {
      practiceDescribe,
      practiceLink,
      practiceName,
    };
    typeStore.fetchAddPractice(practiceTypeCode, addPractice);
  };

  return (
    <>
      <HeadRoomContainer pinStart={100}>
        <TitleContainer>
          <div className="type-book">
            <img
              src="https://www.nicepng.com/png/full/10-101646_books-png.png"
              alt="avt_type_book"
            />
            <p>{dataType.typeName}</p>
          </div>
          {isLoadindType || isLoadingBook || isLoadingPractice ? (
            <span className="loader-contain" />
          ) : (
            <div className="toggle-container">
              <Tooltip title="Books" placement="bottom" arrow>
                <div
                  className={toggle ? 'toggle-item' : 'toggle-select'}
                  onClick={() => setToggle(false)}
                  role="presentation"
                >
                  <MenuBookIcon className="icon" />
                </div>
              </Tooltip>
              <Tooltip title="Practices" placement="bottom" arrow>
                <div
                  className={toggle ? 'toggle-select' : 'toggle-item'}
                  onClick={() => setToggle(true)}
                  role="presentation"
                >
                  <PoolIcon className="icon" />
                </div>
              </Tooltip>
            </div>
          )}
        </TitleContainer>
      </HeadRoomContainer>
      {dataType && dataType.typeName && (
        <DetailTypeContainer>
          {toggle ? (
            <Practices
              practiceTypeCode={typeCode}
              openDialogLogin={openDialogLogin}
            />
          ) : (
            <Books
              typeCode={typeCode}
              typeName={dataType.typeName}
              openDialogLogin={openDialogLogin}
            />
          )}

          <ToolbarContainer>
            <Box
              sx={{
                height: '100vh',
                transform: 'translateZ(0px)',
                flexGrow: 1,
              }}
            >
              <Backdrop open={open} />
              {isHavingToken() ? (
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
                  onClose={() => setOpen(false)}
                  onClick={handleToggle}
                  open={open}
                  onOpen={() => {}}
                >
                  <SpeedDialAction
                    key="home"
                    icon={<HomeIcon />}
                    tooltipTitle="Home"
                    tooltipOpen
                    onClick={hadleClikBackHome}
                  />
                  {!toggle ? (
                    <SpeedDialAction
                      key="addBook"
                      icon={<CreateNewFolderIcon />}
                      tooltipTitle="Add Book"
                      tooltipOpen
                      onClick={handleOpenDialogCreate}
                    />
                  ) : (
                    <SpeedDialAction
                      key="addPractice"
                      icon={<LibraryAddIcon />}
                      tooltipTitle="Add Practice"
                      tooltipOpen
                      onClick={handleOpenCreatePractice}
                    />
                  )}
                  ,
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
                  onClose={() => setOpen(false)}
                  onClick={handleToggle}
                  open={open}
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
          <div style={{ position: 'relative', zIndex: '10' }}>
            <Footer />
          </div>
        </DetailTypeContainer>
      )}
      {/* Dialog creat book */}
      <DialogCreateContainer
        open={openDialogCreate}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="sm"
        fullWidth
      >
        {adBookData && adBookData.data ? (
          <DialogSuccess>
            <h1>{adBookData.data}</h1>
            <div>
              <Button className="btn-exit" onClick={handleExitSuccess}>
                Exit
              </Button>
            </div>
          </DialogSuccess>
        ) : (
          <DialogContent id="alert-dialog-content">
            <>
              <AddBoxIcon className="icon-create" />
              <form
                onSubmit={handleSubmitCreate(handleSubmitCreateBook)}
                className="form-create-book"
              >
                <h4>Add Book</h4>

                <div>
                  <p>{`Book's Name: `}</p>
                  <input
                    placeholder={`Book's Name`}
                    {...registerCreate('createBook.name', {
                      required: 'Do not empty!!',
                    })}
                  />
                  {errorsCreate?.createBook?.name &&
                    errorsCreate?.createBook?.name?.message && (
                      <span>{errorsCreate?.createBook?.name?.message}</span>
                    )}
                </div>
                <div>
                  <p>{`Book's Author: `}</p>
                  <input
                    placeholder={`Book's Author`}
                    {...registerCreate('createBook.author', {
                      required: 'Do not empty!!',
                    })}
                  />
                  {errorsCreate?.createBook?.author &&
                    errorsCreate?.createBook?.author?.message && (
                      <span>{errorsCreate?.createBook?.author?.message}</span>
                    )}
                </div>
                <div>
                  <p>{`Book's Language: `}</p>
                  <input
                    placeholder={`Book's Language`}
                    {...registerCreate('createBook.language', {
                      required: 'Do not empty!!',
                    })}
                  />
                  {errorsCreate?.createBook?.language &&
                    errorsCreate?.createBook?.language?.message && (
                      <span>{errorsCreate?.createBook?.language?.message}</span>
                    )}
                </div>
                <div>
                  <p>{`Book's Poster: `}</p>
                  <input
                    placeholder={`Book's Poster`}
                    {...registerCreate('createBook.poster', {
                      required: 'Do not empty!!',
                    })}
                  />
                  {errorsCreate?.createBook?.poster &&
                    errorsCreate?.createBook?.poster?.message && (
                      <span>{errorsCreate?.createBook?.poster?.message}</span>
                    )}
                </div>
                <div>
                  <p>{`Book's Cource Link: `}</p>
                  <input
                    placeholder={`Book's Cource Link`}
                    {...registerCreate('createBook.linkCource', {
                      required: 'Do not empty!!',
                    })}
                  />
                  {errorsCreate?.createBook?.linkCource &&
                    errorsCreate?.createBook?.linkCource?.message && (
                      <span>
                        {errorsCreate?.createBook?.linkCource?.message}
                      </span>
                    )}
                </div>
                <div>
                  <p>{`Book's FilePdf: `}</p>
                  <input
                    type="file"
                    accept="application/pdf"
                    style={{ cursor: 'pointer' }}
                    {...registerCreate('createBook.filePdf', {})}
                    placeholder={`Book's FilePdf`}
                  />
                  {errorsCreate?.createBook?.filePdf &&
                    errorsCreate?.createBook?.filePdf?.message && (
                      <span>{errorsCreate?.createBook?.filePdf?.message}</span>
                    )}
                </div>
                <div>
                  <p>{`Book's Expected Time: `}</p>
                  <input
                    style={{ width: '60%' }}
                    type="number"
                    placeholder={`Book's Expected Time`}
                    {...registerCreate('createBook.expectedTime', {
                      required: 'Do not empty!!',
                    })}
                  />
                  {errorsCreate?.createBook?.expectedTime &&
                    errorsCreate?.createBook?.expectedTime?.message && (
                      <span>
                        {errorsCreate?.createBook?.expectedTime?.message}
                      </span>
                    )}
                </div>
                <div>
                  <p>{`Book's Describe: `}</p>
                  <textarea
                    name="message"
                    {...registerCreate('createBook.describe', {
                      required: 'Do not empty!!',
                    })}
                    placeholder={`Book's Describe`}
                  />
                  {errorsCreate?.createBook?.describe &&
                    errorsCreate?.createBook?.describe?.message && (
                      <span>{errorsCreate?.createBook?.describe?.message}</span>
                    )}
                </div>
                {isLoadingAdd && <Progress />}
                <div className="btn-container">
                  <Button
                    onClick={handleCloseDialogCreate}
                    className="btn-cancel"
                  >
                    Cancel
                  </Button>
                  <Button className="btn-update" type="submit">
                    Add
                  </Button>
                </div>
              </form>
            </>
          </DialogContent>
        )}
      </DialogCreateContainer>

      {/* Dialog create practice */}
      <DialogCreateContainer
        open={openDialogCreatePractice}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="sm"
        fullWidth
      >
        {adPracticeData && adPracticeData.data ? (
          <DialogSuccess>
            <h1>{adPracticeData.data}</h1>
            <div>
              <Button className="btn-exit" onClick={handleExitSuccess}>
                Exit
              </Button>
            </div>
          </DialogSuccess>
        ) : (
          <DialogContent id="alert-dialog-content">
            <>
              <AddBoxIcon className="icon-create" />
              <form
                onSubmit={handleSubmit(handleCreatePractice)}
                className="form-create-book"
              >
                <h4>Add Practice</h4>
                <div>
                  <p>{`Practice's Name: `}</p>
                  <input
                    placeholder={`Practice's Name`}
                    {...register('createPractice.practiceName', {
                      required: 'Do not empty!!',
                    })}
                  />
                  {errors?.createPractice?.practiceName &&
                    errors?.createPractice?.practiceName?.message && (
                      <span>
                        {errors?.createPractice?.practiceName?.message}
                      </span>
                    )}
                </div>
                <div>
                  <p>{`Practice's Link: `}</p>
                  <input
                    placeholder={`Practice's Link`}
                    {...register('createPractice.practiceLink', {
                      required: 'Do not empty!!',
                    })}
                  />
                  {errors?.createPractice?.practiceLink &&
                    errors?.createPractice?.practiceLink?.message && (
                      <span>
                        {errors?.createPractice?.practiceLink?.message}
                      </span>
                    )}
                </div>
                <div>
                  <p>{`Practice's Describe: `}</p>

                  <textarea
                    name="message"
                    {...register('createPractice.practiceDescribe', {
                      required: 'Do not empty!!',
                    })}
                    placeholder={`Practice's Describe`}
                  />
                  {errors?.createPractice?.practiceDescribe &&
                    errors?.createPractice?.practiceDescribe?.message && (
                      <span>
                        {errors?.createPractice?.practiceDescribe?.message}
                      </span>
                    )}
                </div>
                {isLoadingAdd && <Progress />}
                <div className="btn-container">
                  <Button
                    onClick={handleCloseCreatePractice}
                    className="btn-cancel"
                  >
                    Cancel
                  </Button>
                  <Button className="btn-update" type="submit">
                    Add
                  </Button>
                </div>
              </form>
            </>
          </DialogContent>
        )}
      </DialogCreateContainer>
      <LogIn
        openDialogLogin={openDialogLogin}
        setOpenDialogLogin={setOpenDialogLogin}
      />
    </>
  );
};

export default observer(DetailTypes);
