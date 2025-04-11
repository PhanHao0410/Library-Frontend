import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import ErrorIcon from '@mui/icons-material/Error';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';

import {
  PracticesContainer,
  PracticesContent,
  ListPracticesContainer,
  PracticeItem,
  DialogDeleteContainer,
  DialogUpdateContainer,
} from './styles';

const textCheck: string = 'oplog.rs';

type FormUpdate = {
  updatePractice: {
    practiceName: string;
    practiceLink: string;
    practiceDescribe: string;
  };
};

const Practices = () => {
  const [deleteValue, setDeleteValue] = useState<string>('');
  const [finalDelete, setFinalDelete] = useState<string>('');
  const [openDialogDelete, setOpenDialogDelete] = useState<boolean>(false);
  const [openDialogUpdate, setOpenDialogUpdate] = useState<boolean>(false);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormUpdate>();

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
      updatePractice: {
        practiceName: '',
        practiceLink: '',
        practiceDescribe: '',
      },
    });
    setOpenDialogUpdate(false);
  };

  const handleGetDeleteInput = (e) => {
    setDeleteValue(e.target.value);
  };

  const handleSubmitUpdate = (updateValue) => {
    console.log('check practice update: ', updateValue.updatePractice);
  };

  return (
    <>
      <PracticesContainer>
        <PracticesContent>
          <div className="background" />
          <ListPracticesContainer>
            <PracticeItem>
              <div className="content-book">
                <p>
                  <span className="keyword-book">Name: </span>
                  <span>Data structures</span>
                </p>
                <p>
                  <span className="keyword-book">Link: </span>
                  <span>
                    Data structures
                    ffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                  </span>
                </p>
                <p>
                  <span className="keyword-book">Describe:</span>
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
            </PracticeItem>
            <PracticeItem>
              <div className="content-book">
                <p>
                  <span className="keyword-book">Name: </span>
                  <span>Data structures</span>
                </p>
                <p>
                  <span className="keyword-book">Link: </span>
                  <span>
                    Data structures
                    ffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                  </span>
                </p>
                <p>
                  <span className="keyword-book">Describe:</span>
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
            </PracticeItem>
          </ListPracticesContainer>
        </PracticesContent>
      </PracticesContainer>
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
            <h4>Delete Practice Document Data Structures</h4>
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

      {/* Dialog delete */}
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
            <h4>Update Practice Document Data Structures</h4>
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
                  <span>Do not empty</span>
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
                  <span>Do not empty</span>
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

export default Practices;
