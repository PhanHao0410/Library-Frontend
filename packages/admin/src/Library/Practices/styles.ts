import styled from 'styled-components';
import Dialog from '@mui/material/Dialog';

import { devices } from '../DeviceScreen';

export const PracticesContainer = styled.div`
  width: 100%;
  height: 100%;
  font-family: Open Sans, sans-serif;
  z-index: 10;
`;

export const PracticesContent = styled.div`
  height: 100%;
  width: 100%;
  .background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #f0f0f0;
    background-image: radial-gradient(circle, #ccc 1px, transparent 1px);
    background-size: 20px 20px;
  }

  .loader-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }
  .loader {
    width: 48px;
    height: 48px;
    border: 5px solid;
    border-color: #ff3d00 transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const ListPracticesContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  z-index: 1;
  color: white;
  padding: 120px 100px;
  display: inline-block;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 30px;
  row-gap: 30px;
  @media ${devices.maxlg} {
    grid-template-columns: repeat(1, 1fr);
    column-gap: 0px;
  }
  @media ${devices.maxmd} {
    padding: 120px 20px;
  }
`;

export const PracticeItem = styled.div`
  margin: 0 auto;
  width: 70%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  align-items: center;
  cursor: default;
  transition: ease-in 0.5s;
  margin-bottom: 50px;
  :hover {
    transform: translateY(-5px);
    transition: ease-in 0.5s;
  }
  @media ${devices.maxal} {
    width: 90%;
  }
  @media ${devices.maxmd} {
    width: 100%;
  }

  .content-book {
    max-width: 100%;
    padding: 10px 20px;
    p {
      margin-bottom: 20px;
      font-size: 18px;
      :last-child {
        margin-bottom: 0px;
      }
      .keyword-book {
        color: RGB(144 144 143);
        font-weight: 500;
      }
    }
    span {
      white-space: normal;
      word-break: break-word;
    }
    a {
      color: white;
      :hover {
        color: RGB(3 106 210);
      }
    }
    .action-contain {
      width: 100%;
      text-align: center;
      border-top: 1px solid RGB(155 152 164);
      padding-top: 15px;
      .update {
        background-color: RGB(21 111 201);
        margin-right: 8px;
        transition: ease-in 0.5s;
        :hover {
          background-color: RGB(16 86 156);
          transition: ease-in 0.5s;
        }
      }
      .delete {
        background-color: RGB(170 26 18);
        margin-left: 8px;
        transition: ease-in 0.5s;
        :hover {
          background-color: RGB(141 19 12);
          transition: ease-in 0.5s;
        }
      }
    }
  }
`;
export const DialogDeleteContainer = styled(Dialog)`
  #alert-dialog-content {
    display: flex;
    .icon-delete {
      font-size: 26px;
      transform: translateY(1px);
      color: RGB(240 86 78);
    }
    .content-dialog {
      margin-left: 8px;
      width: 100%;
      h4 {
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 10px;
      }
      h5 {
        font-weight: 500;
        font-size: 16px;
        margin-bottom: 15px;
      }
      p {
        margin-bottom: 6px;
        font-size: 16px;
        font-weight: 600;
      }
      input {
        width: 100%;
        border-radius: 8px;
        padding: 8px 40px 8px 8px;
        font-size: 16px;
        border: 1px solid RGB(164 164 163);
        :hover {
          outline: 3px solid RGB(226 226 226);
        }
        :focus {
          outline: 3px solid RGB(115 180 246);
          border: 1px solid RGB(164 164 163);
        }
      }
    }
  }
  #alert-dialog-action {
    margin-right: 20px;
    margin-bottom: 20px;
    .btn-cancel {
      border: 1px solid RGB(164 164 163);
      margin-right: 5px;
      color: black;
      border-radius: 8px;
      :hover {
        outline: 3px solid RGB(226 226 226);
      }
    }
    .btn-delete-err {
      border: 1px solid RGB(164 164 163);
      color: black;
      background-color: RGB(229 232 235);
      opacity: 0.5;
      cursor: not-allowed !important;
      border-radius: 8px;
      padding: 10px 10px;
      text-transform: uppercase;
      font-weight: 600;
    }
    .btn-delete-corr {
      border-radius: 8px;
      padding: 10px 10px;
      text-transform: uppercase;
      font-weight: 600;
      border: none;
      cursor: pointer;
      background-color: RGB(210 27 17);
      color: white;
      :hover {
        outline: 3px solid RGB(246 203 201);
      }
    }
  }
  .login-container {
    height: 100%;
    width: 100%;
    padding: 40px 20px;
  }
`;

export const DialogUpdateContainer = styled(Dialog)`
  #alert-dialog-content {
    display: flex;
    .icon-update {
      font-size: 40px;
      color: RGB(76 153 230);
    }
    form {
      width: 100%;
      margin: 8px 10px;
      h4 {
        font-size: 24px;
      }
      div {
        width: 100%;
        margin-top: 15px;
      }
      p {
        margin-bottom: 3px;
        font-size: 16px;
        font-weight: 600;
      }
      input {
        width: 100%;
        border-radius: 4px;
        border: 1px solid RGB(144 144 143);
        padding: 8px 30px 8px 8px;
        font-size: 16px;
        ::placeholder {
          font-size: 14px;
          color: RGB(184 184 184);
          font-weight: 400;
        }
        :hover {
          outline: 3px solid RGB(227 227 227);
        }
        :focus {
          border: 1px solid RGB(144 144 143);
          outline: 2px solid RGB(133 191 248);
        }
      }
      textarea {
        resize: none;
        width: 100%;
        height: 80px;
        border-radius: 4px;
        padding: 8px 30px 8px 8px;
        font-size: 16px;
        border: 1px solid RGB(144 144 143);
        font-family: Open Sans, sans-serif;

        :hover {
          outline: 3px solid RGB(227 227 227);
          border: 1px solid RGB(144 144 143);
        }
        :focus {
          border: 1px solid RGB(144 144 143);
          outline: 2px solid RGB(133 191 248);
        }
        ::placeholder {
          font-size: 14px;
          color: RGB(184 184 184);
          font-weight: 400;
        }
      }
      span {
        display: inline-block;
        font-size: 12px;
        color: red;
        margin-left: 8px;
        transform: translateY(-2px);
      }
      .btn-container {
        display: flex;
        align-items: center;
        justify-content: end;
        margin-top: 20px;
        .btn-cancel {
          border: 1px solid RGB(131 131 131);
          margin-right: 15px;
          color: black;
          :hover {
            outline: 3px solid RGB(227 227 227);
          }
        }
        .btn-update {
          color: white;
          background-color: RGB(48 140 231);
          :hover {
            outline: 3px solid RGB(171 210 248);
          }
        }
      }
    }
  }
  .login-container {
    height: 100%;
    width: 100%;
    padding: 40px 20px;
  }
`;

export const DialogSuccess = styled.div`
  padding: 40px;
  width: 100%;
  h1 {
    width: 100%;
    font-size: 34px;
    text-align: center;
    color: RGB(3 45 105);
  }
  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    .btn-exit {
      border: none;
      background-color: RGB(236 50 33);
      color: white;
      padding: 4px 25px;
      font-size: 18px;
      :hover {
        outline: 2px solid RGB(247 138 128);
        background-color: RGB(205 21 4);
      }
    }
  }
`;
