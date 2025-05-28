import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { observer } from 'mobx-react-lite';
import { Button } from '@mui/material';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { isHavingToken, isTokenExpiry } from '../../utils/localStorage';
import Progress from '../../components/Progress';

import { useStoreMobx } from '../../mobx/hook';

import {
  LogInContainer,
  TitleContainer,
  AlarmSuccessContainer,
  DialogLoninContainer,
} from './styles';

type LoginForm = {
  userName: string;
  userPassword: string;
};

const LogIn = ({ setOpenDialogLogin, openDialogLogin }) => {
  const {
    rootStore: { loginStore },
  } = useStoreMobx();
  const {
    register,
    reset,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();
  const [errorAssis, setErrorAssis] = useState(false);
  const checkError = loginStore.getCheckError;
  const isLoading = loginStore.getIsLoading;

  useEffect(() => {
    if (checkError && errorAssis) {
      setError('userName', {
        message: 'The name or password is not authorized as an administrator!!',
      });
      setError('userPassword', {
        message: 'The name or password is not authorized as an administrator!!',
      });
    }
  }, [checkError, errorAssis]);

  const handleClickCancel = () => {
    setOpenDialogLogin(false);
    reset({ userName: '', userPassword: '' });
    setErrorAssis(false);
    loginStore.setResetLogin();
  };

  const handleLogIn = (valueLogin) => {
    const userName = valueLogin.userName;
    const userPassword = valueLogin.userPassword;
    loginStore.fetchLogIn({ userName, userPassword });
    setErrorAssis(true);
  };
  return (
    <DialogLoninContainer
      open={openDialogLogin}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="sm"
      fullWidth
    >
      {!isHavingToken() || !isTokenExpiry() ? (
        <LogInContainer>
          <AdminPanelSettingsIcon className="icon-title" />
          <TitleContainer>
            <div className="title">
              <h1>Admin access required</h1>
              <p>Please log in as an administrator.</p>
            </div>
            <form onSubmit={handleSubmit(handleLogIn)}>
              <div className="form-content">
                <p>User Name:</p>
                <input
                  placeholder="User Name"
                  {...register('userName', {
                    required: 'Do not empty!!',
                  })}
                />
                {errors?.userName && errors?.userName?.message && (
                  <span>{errors?.userName?.message}</span>
                )}
              </div>
              <div className="form-content">
                <p>User Password:</p>
                <input
                  placeholder="User Password"
                  {...register('userPassword', {
                    required: 'Do not empty!!',
                  })}
                />
                {errors?.userPassword && errors?.userPassword?.message && (
                  <span>{errors?.userPassword?.message}</span>
                )}
              </div>
              {isLoading && <Progress />}
              <div className="action-container">
                <Button className="btn-cancel" onClick={handleClickCancel}>
                  Cancel
                </Button>
                <Button className="btn-add" type="submit">
                  Submit
                </Button>
              </div>
            </form>
          </TitleContainer>
        </LogInContainer>
      ) : (
        <AlarmSuccessContainer>
          <h1>Login successful</h1>
          <h4>You can now add, edit, and delete information.</h4>
          <div>
            <Button className="btn-exit" onClick={handleClickCancel}>
              Exit
            </Button>
          </div>
        </AlarmSuccessContainer>
      )}
    </DialogLoninContainer>
  );
};

export default React.memo(observer(LogIn));
