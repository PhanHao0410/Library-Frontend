import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useForm } from 'react-hook-form';
import { Button, DialogContent, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import history from '../../utils/history';
import { useStoreMobx } from '../../mobx/hook';
import Progress from '../../components/Progress';
import {
  AnimationSuccess,
  AnimationFail,
} from '../../components/AnimationComponent/AnimationComponent';
import { isHavingToken, isTokenExpiry } from '../../utils/localStorage';
import {
  BookContainer,
  PosterContainer,
  ListTypeContainer,
  TypeBookContainer,
  CreateTypeContainer,
  FormCreateContainer,
  DialogContainer,
} from './styles';

type FormCreateType = {
  typeName: string;
  typeCode: string;
  typePoster: string;
};

const TypeBooks = () => {
  const {
    rootStore: { typeBooksStore },
  } = useStoreMobx();

  const {
    handleSubmit,
    register,
    reset,
    setValue,
    setError,
    formState: { errors },
  } = useForm<FormCreateType>();

  const bookTypeData = typeBooksStore.getBookTypesData;
  const createTypeData = typeBooksStore.getCreateTypeData;
  const createTypeError = typeBooksStore.getCreateTypeError;
  const isLoadingCreate = typeBooksStore.getIsLoadingCreate;
  const [openDialogSuccess, setOpenDialogSuccess] = useState<boolean>(false);
  const [expanded, setExpanded] = useState<boolean>(false);

  useEffect(() => {
    typeBooksStore.fetchAllBookTypes();
  }, []);

  useEffect(() => {
    if (createTypeData.status === 200) {
      setOpenDialogSuccess(true);
    }
    if (createTypeError?.data?.statusCode === 409) {
      setError('typeName', { message: createTypeError?.data?.message });
      setError('typeCode', { message: createTypeError?.data?.message });
    }
    if (createTypeError?.status === 403) {
      setOpenDialogSuccess(true);
    }
  }, [createTypeData, createTypeError]);

  const handleClick = () => {
    setExpanded(true);
  };
  const clickDetailTypeBook = (typeCode) => {
    history.push(`/detailtypebook/${typeCode}`);
  };

  const handleCloseCreateType = () => {
    reset({
      typeCode: '',
      typeName: '',
      typePoster: '',
    });
    setExpanded(false);
  };

  const handleSubmitCreateType = (createValue) => {
    const { typeName, typePoster } = createValue;
    const books = [];
    const typeCode = createValue.typeCode.replaceAll(' ', '');
    const practices = [];
    typeBooksStore.fetchCreateTypeBook({
      typeCode,
      typeName,
      typePoster,
      books,
      practices,
    });
  };

  const handleClickExitSuccess = () => {
    typeBooksStore.setResetCreateType();
    reset({
      typeCode: '',
      typeName: '',
      typePoster: '',
    });
    setOpenDialogSuccess(false);
    typeBooksStore.fetchAllBookTypes();
    setExpanded(false);
  };

  return (
    <>
      <BookContainer>
        <PosterContainer>
          <div className="title-container">
            <h2>A book</h2>
            <h4>is a dream that you hold in your hand</h4>
          </div>
        </PosterContainer>

        {bookTypeData[0]?.typeCode ? (
          <div className="list-type-container">
            <div className="title-container">
              <span />
              <h2 className="text-title">Programming</h2>
              <span />
            </div>
            <ListTypeContainer>
              {bookTypeData &&
                bookTypeData[0] &&
                bookTypeData[0]?.typeCode &&
                bookTypeData.map((item) => {
                  return (
                    <TypeBookContainer
                      key={item.typeId}
                      onClick={() => clickDetailTypeBook(item.typeCode)}
                    >
                      <div className="img-container">
                        <img src={item.typePoster} alt={item.typeCode} />
                      </div>
                      <h2 className="title-avt">{item.typeName}</h2>
                    </TypeBookContainer>
                  );
                })}
              <CreateTypeContainer>
                <div className={`box ${expanded ? 'expanded' : ''}`}>
                  {!expanded ? (
                    <Tooltip title="Create" arrow>
                      <div
                        className="create-button"
                        onClick={handleClick}
                        role="presentation"
                      >
                        <AddIcon className="icon-add" />
                      </div>
                    </Tooltip>
                  ) : (
                    <FormCreateContainer
                      className="create-form"
                      onSubmit={handleSubmit(handleSubmitCreateType)}
                    >
                      <h2>Create New</h2>
                      <div className="type-item">
                        <p>{`Type's Name: `}</p>
                        <input
                          placeholder={`Type's Name`}
                          {...register('typeName', {
                            required: 'Do not empty!!',
                          })}
                        />
                        {errors?.typeName && errors?.typeName?.message && (
                          <span>{errors?.typeName?.message}</span>
                        )}
                      </div>

                      <div className="type-item">
                        <p>{`Type's Code: `}</p>
                        <input
                          placeholder={`Type's Code`}
                          {...register('typeCode', {
                            required: 'Do not empty!!',
                          })}
                        />
                        {errors?.typeCode && errors?.typeCode?.message && (
                          <span>{errors?.typeCode?.message}</span>
                        )}
                      </div>

                      <div className="type-item">
                        <p>{`Type's Poster: `}</p>
                        <input
                          placeholder={`Type's Poster`}
                          {...register('typePoster', {
                            required: 'Do not empty!!',
                          })}
                        />
                        {errors?.typePoster && errors?.typePoster?.message && (
                          <span>{errors?.typePoster?.message}</span>
                        )}
                      </div>

                      <div className="btn-container">
                        {isLoadingCreate ? (
                          <span className="loader-contain" />
                        ) : (
                          <>
                            <Button
                              className="btn-cancel"
                              onClick={handleCloseCreateType}
                            >
                              Cancel
                            </Button>
                            <Button className="btn-update" type="submit">
                              Submit
                            </Button>
                          </>
                        )}
                      </div>
                    </FormCreateContainer>
                  )}
                </div>
              </CreateTypeContainer>
            </ListTypeContainer>
          </div>
        ) : (
          <Progress />
        )}
      </BookContainer>
      <DialogContainer
        open={openDialogSuccess}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="sm"
        fullWidth
      >
        <DialogContent id="alert-dialog-content">
          {createTypeError && createTypeError?.status === 403 ? (
            <>
              <AnimationFail />
              <h2>You are not logged in!!!</h2>
              <h4>Please log in to perform CRUD operations.</h4>
              <div className="btn-action">
                <Button className="btn" onClick={handleClickExitSuccess}>
                  Exit
                </Button>
              </div>
            </>
          ) : (
            <>
              <AnimationSuccess />
              <h2>Create type book success!!!</h2>
              <div className="btn-action">
                <Button className="btn" onClick={handleClickExitSuccess}>
                  Exit
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </DialogContainer>
    </>
  );
};

export default observer(TypeBooks);
