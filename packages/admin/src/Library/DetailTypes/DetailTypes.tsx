import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
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

import history from '../../utils/history';
import path from '../../constants/clientPath';
import Books from '../Books';
import Practices from '../Practices';

import {
  DetailTypeContainer,
  TitleContainer,
  ToolbarContainer,
  DialogCreateContainer,
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
    handleSubmit: handleSubmitCreate,
    register: registerCreate,
    reset: resetCreate,
    formState: { errors: errorsCreate },
  } = useForm<FormCreate>();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormCreatePractice>();
  const [open, setOpen] = useState<boolean>(false);
  const [openDialogCreate, setOpenDialogCreate] = useState<boolean>(false);
  const [openDialogCreatePractice, setOpenDialogCreatePractice] =
    useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(true);

  const typeCode = match.params.typecode;

  const handleToggle = () => setOpen((prev) => !prev);

  const hadleClikBackHome = () => {
    setOpen(false);
    history.replace(path.ROOT);
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
      },
    });
  };

  const handleOpenCreatePractice = () => {
    setOpen(false);

    setOpenDialogCreatePractice(true);
  };

  const handleCloseCreatePractice = () => {
    setOpenDialogCreatePractice(false);
    console.log('check typecod: ', typeCode);
    reset({
      createPractice: {
        practiceName: '',
        practiceLink: '',
        practiceDescribe: '',
      },
    });
  };

  const handleSubmitCreateBook = (createValue) => {
    console.log('check create book value: ', createValue.createBook);
  };

  const handleCreatePractice = (practiceValue) => {
    console.log('check create practice value: ', practiceValue.createPractice);
  };

  return (
    <>
      <DetailTypeContainer>
        <TitleContainer>
          <div className="type-book">
            <img
              src="https://www.nicepng.com/png/full/10-101646_books-png.png"
              alt="avt_type_book"
            />
            <p>Data Structures And Alrigothms</p>
          </div>
          <div className="toggle-container">
            <div
              className={toggle ? 'toggle-item' : 'toggle-select'}
              onClick={() => setToggle(!toggle)}
              role="presentation"
            >
              <MenuBookIcon className="icon" />
            </div>
            <div
              className={toggle ? 'toggle-select' : 'toggle-item'}
              onClick={() => setToggle(!toggle)}
              role="presentation"
            >
              <PoolIcon className="icon" />
            </div>
          </div>
        </TitleContainer>
        {toggle ? <Practices /> : <Books />}

        <ToolbarContainer>
          <Box
            sx={{
              height: '100vh',
              transform: 'translateZ(0px)',
              flexGrow: 1,
            }}
          >
            <Backdrop open={open} />
            <SpeedDial
              ariaLabel="SpeedDial tooltip example"
              sx={{
                position: 'absolute',
                bottom: 10,
                right: 10,
                '& .MuiFab-primary': {
                  backgroundColor: 'RGB(3 170 78)',
                  color: '#fff',
                  '&:hover': {
                    backgroundColor: 'RGB(2 113 51)',
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
            </SpeedDial>
          </Box>
        </ToolbarContainer>
      </DetailTypeContainer>
      <DialogCreateContainer
        open={openDialogCreate}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="sm"
        fullWidth
      >
        <DialogContent id="alert-dialog-content">
          <AddBoxIcon className="icon-create" />
          <form onSubmit={handleSubmitCreate(handleSubmitCreateBook)}>
            <h4>Add Book Data Structures</h4>
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
                  <span>Do not empty</span>
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
                  <span>Do not empty</span>
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
                  <span>Do not empty</span>
                )}
            </div>
            <div>
              <p>{`Book's Type: `}</p>
              <input
                placeholder={`Book's Type`}
                {...registerCreate('createBook.bookType', {
                  required: 'Do not empty!!',
                })}
              />
              {errorsCreate?.createBook?.bookType &&
                errorsCreate?.createBook?.bookType?.message && (
                  <span>Do not empty</span>
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
                  <span>Do not empty</span>
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
                  <span>Do not empty</span>
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
                  <span>Do not empty</span>
                )}
            </div>
            <div className="btn-container">
              <Button onClick={handleCloseDialogCreate} className="btn-cancel">
                Cancel
              </Button>
              <Button className="btn-update" type="submit">
                Add
              </Button>
            </div>
          </form>
        </DialogContent>
      </DialogCreateContainer>

      {/* Dialog create practice */}
      <DialogCreateContainer
        open={openDialogCreatePractice}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="sm"
        fullWidth
      >
        <DialogContent id="alert-dialog-content">
          <AddBoxIcon className="icon-create" />
          <form onSubmit={handleSubmit(handleCreatePractice)}>
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
                  <span>Do not empty</span>
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
                  <span>Do not empty</span>
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
                  <span>Do not empty</span>
                )}
            </div>

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
        </DialogContent>
      </DialogCreateContainer>
    </>
  );
};

export default DetailTypes;
