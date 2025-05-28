import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { observer } from 'mobx-react-lite';

import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import ErrorIcon from '@mui/icons-material/Error';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import { Tooltip, useMediaQuery } from '@mui/material';
import LogIn from '../LogIn';
import { isHavingToken, isTokenExpiry } from '../../utils/localStorage';
import { useStoreMobx } from '../../mobx/hook';
import { CreatePracticeForm } from '../../types/Requests';
import Progress from '../../components/Progress';
import WarnNoData from '../../components/WarnNoData';
import Footer from '../../components/Footer';

import {
  PracticesContainer,
  PracticesContent,
  ListPracticesContainer,
  PracticeItem,
  DialogDeleteContainer,
  DialogUpdateContainer,
  DialogSuccess,
  TitleTopicContain,
  StyleComputetContainer,
} from './styles';

type FormUpdate = {
  updatePractice: {
    practiceName: string;
    practiceLink: string;
    practiceDescribe: string;
  };
};

const arrKey = new Array(8).fill(0);

const CssComputer = ({ practicePoster }) => {
  return (
    <StyleComputetContainer>
      <div className="computer-setup">
        <div className="monitor">
          <div
            className="screen"
            style={{ backgroundImage: `url(${practicePoster})` }}
          />
        </div>
        <div className="peripherals">
          <div className="keyboard">
            <div className="key-row">
              {arrKey.map((item, ind) => {
                return <div className="key" key={`${ind}&&${item}`} />;
              })}
            </div>
            <div className="key-row">
              {arrKey.map((item, ind) => {
                return <div className="key" key={`${ind}&&${item}`} />;
              })}
            </div>
            <div className="key-row">
              {arrKey.map((item, ind) => {
                return <div className="key" key={`${ind}&&${item}`} />;
              })}
            </div>
          </div>
          <div className="mouse" />
        </div>
      </div>
    </StyleComputetContainer>
  );
};

const Practices = ({ practiceTypeCode, openDialogLogin }) => {
  const {
    rootStore: { practicesStore },
  } = useStoreMobx();

  const {
    handleSubmit,
    register,
    reset,
    setValue,
    setError,
    formState: { errors },
  } = useForm<FormUpdate>();

  const practicesData = practicesStore.getPracticesData;
  const deletePracticeData = practicesStore.getDeletePracticeData;
  const editPracticeData = practicesStore.getEditPracticeData;
  const editPracticeError = practicesStore.getEditPracticeError;
  const isLoadingAction = practicesStore.getIsLoadingAction;
  const isLoadingPractice = practicesStore.getIsLoading;
  const [deleteValue, setDeleteValue] = useState<string>('');
  const [finalDelete, setFinalDelete] = useState<string>('');
  const [openDialogDelete, setOpenDialogDelete] = useState<boolean>(false);
  const [openDialogUpdate, setOpenDialogUpdate] = useState<boolean>(false);
  const [practiceSelected, setPracticeSelected] = useState<any>({});
  const matchesMaxSm = useMediaQuery('(max-width:600px)');

  useEffect(() => {
    practicesStore.fetchAllPracticesByTypeCode(practiceTypeCode);
  }, [practiceTypeCode]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFinalDelete(deleteValue);
    }, 500);
    return () => clearTimeout(timer);
  }, [deleteValue]);

  useEffect(() => {
    if (editPracticeError && editPracticeError.status) {
      setError('updatePractice.practiceName', {
        message: 'Practice already exists!!',
      });
      setError('updatePractice.practiceLink', {
        message: 'Practice already exists!!',
      });
    }
  }, [editPracticeError]);

  const handleClickOpenDialogDelete = (practice) => {
    setOpenDialogDelete(true);
    setPracticeSelected(practice);
  };

  const handleCloseDialogDelete = () => {
    setOpenDialogDelete(false);
    setDeleteValue('');
    setPracticeSelected({});
  };

  const handleDeletePractice = () => {
    const practiceId = practiceSelected.practiceId;
    practicesStore.fetchDeletePractice(practiceTypeCode, practiceId);
  };

  const handleOpenDialogUpdate = (practice) => {
    setPracticeSelected(practice);
    setOpenDialogUpdate(true);
    setValue('updatePractice.practiceName', practice.practiceName);
    setValue('updatePractice.practiceLink', practice.practiceLink);
    setValue('updatePractice.practiceDescribe', practice.practiceDescribe);
  };

  const handleCloseDialogUpdate = () => {
    reset({
      updatePractice: {
        practiceName: '',
        practiceLink: '',
        practiceDescribe: '',
      },
    });
    setPracticeSelected({});
    setOpenDialogUpdate(false);
  };

  const handleGetDeleteInput = (e) => {
    setDeleteValue(e.target.value);
  };

  const handleLogin = () => {
    setOpenDialogDelete(false);
    setOpenDialogUpdate(false);
  };

  const handleSubmitUpdate = (updateValue) => {
    const { practiceName } = updateValue.updatePractice;
    const { practiceLink } = updateValue.updatePractice;
    const { practiceDescribe } = updateValue.updatePractice;
    const { practiceId } = practiceSelected;
    const updateData: CreatePracticeForm = {
      practiceName,
      practiceLink,
      practiceDescribe,
    };

    practicesStore.fetchUpdatePractice(
      practiceTypeCode,
      practiceId,
      updateData,
    );
  };

  const handleExitSuccess = () => {
    setPracticeSelected({});
    setDeleteValue('');
    setOpenDialogUpdate(false);
    setOpenDialogDelete(false);
    practicesStore.setResetDeletePractice();
    practicesStore.setResetEditPractice();
    practicesStore.fetchAllPracticesByTypeCode(practiceTypeCode);
  };

  return (
    <>
      <PracticesContainer>
        <PracticesContent>
          <div className="background" />
          <TitleTopicContain>
            <div className="test-border" />
            <h1 className="title-topic">Practices</h1>
            <div className="test-border" />
          </TitleTopicContain>
          {isLoadingPractice ? (
            <div className="loader-container">
              <div className="loader" />
            </div>
          ) : (
            <>
              {practicesData[0]?.practiceId ? (
                <>
                  {practicesData && practicesData[0] && (
                    <ListPracticesContainer>
                      {practicesData.map((practice) => {
                        return (
                          <Tooltip
                            title={practice.practiceDescribe}
                            placement={matchesMaxSm ? 'top' : 'left'}
                            arrow
                            key={practice.practiceId}
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
                            <PracticeItem>
                              <a
                                href={practice.practiceLink}
                                target="blank"
                                style={{ textDecoration: 'none' }}
                              >
                                <div className="content-book">
                                  <CssComputer
                                    practicePoster={practice.practicePoster}
                                  />
                                  <h1>{practice.practiceName}</h1>
                                </div>
                              </a>
                              {isHavingToken() && isTokenExpiry() && (
                                <div className="action-contain">
                                  <Button
                                    variant="contained"
                                    size="small"
                                    className="update"
                                    onClick={() =>
                                      handleOpenDialogUpdate(practice)
                                    }
                                  >
                                    Update
                                  </Button>
                                  <Button
                                    variant="contained"
                                    size="small"
                                    className="delete"
                                    onClick={() =>
                                      handleClickOpenDialogDelete(practice)
                                    }
                                  >
                                    Delete
                                  </Button>
                                </div>
                              )}
                            </PracticeItem>
                          </Tooltip>
                        );
                      })}
                    </ListPracticesContainer>
                  )}
                </>
              ) : (
                <WarnNoData warnText="practices" />
              )}
            </>
          )}
        </PracticesContent>
      </PracticesContainer>

      {/* Dialog delete */}
      <DialogDeleteContainer
        open={openDialogDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="sm"
        fullWidth
      >
        {deletePracticeData && deletePracticeData.data ? (
          <DialogSuccess>
            <h1>{`Practice "${practiceSelected.practiceName}" be deleted successful`}</h1>
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
                <h4>Delete Practice Document Data Structures</h4>
                <h5>
                  {`Are you sure you want to drop collection "${practiceSelected.practiceName}"?`}
                </h5>
                <p>{`Type "${practiceSelected.practiceName}" to confirm your action`}</p>
                <input
                  value={deleteValue}
                  onChange={(e) => handleGetDeleteInput(e)}
                />
              </div>
            </DialogContent>
            {isLoadingAction && <Progress />}
            <DialogActions id="alert-dialog-action">
              <Button onClick={handleCloseDialogDelete} className="btn-cancel">
                Cancel
              </Button>
              <button
                onClick={
                  finalDelete === practiceSelected.practiceName
                    ? handleDeletePractice
                    : null
                }
                className={
                  finalDelete === practiceSelected.practiceName
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

      {/* Dialog Update Practices */}
      <DialogUpdateContainer
        open={openDialogUpdate}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="sm"
        fullWidth
      >
        {editPracticeData && editPracticeData.data ? (
          <DialogSuccess>
            <h1>{`Practice "${practiceSelected.practiceName}" be updated successful`}</h1>
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
              <h4>{`Update Practice ${practiceSelected.practiceName}`}</h4>
              <div>
                <p>{`Practice Document's Name: `}</p>
                <input
                  placeholder={`Practice Document's Name`}
                  {...register('updatePractice.practiceName', {
                    required: 'Do not empty!!',
                  })}
                />
                {errors?.updatePractice?.practiceName &&
                  errors?.updatePractice?.practiceName?.message && (
                    <span>{errors?.updatePractice?.practiceName?.message}</span>
                  )}
              </div>
              <div>
                <p>{`Practice Document's  Link: `}</p>
                <input
                  placeholder={`Practice Document's  Link`}
                  {...register('updatePractice.practiceLink', {
                    required: 'Do not empty!!',
                  })}
                />
                {errors?.updatePractice?.practiceLink &&
                  errors?.updatePractice?.practiceLink?.message && (
                    <span>{errors?.updatePractice?.practiceLink?.message}</span>
                  )}
              </div>
              <div>
                <p>{`Practice Document's Describe: `}</p>
                <textarea
                  name="message"
                  {...register('updatePractice.practiceDescribe', {
                    required: 'Do not empty!!',
                  })}
                  placeholder={`Practice's Describe`}
                />
                {errors?.updatePractice?.practiceDescribe &&
                  errors?.updatePractice?.practiceDescribe?.message && (
                    <span>
                      {errors?.updatePractice?.practiceDescribe?.message}
                    </span>
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
      </DialogUpdateContainer>
    </>
  );
};

export default React.memo(observer(Practices));
