import styled from 'styled-components';
import Dialog from '@mui/material/Dialog';

import { devices } from '../DeviceScreen';

export const StyleComputetContainer = styled.div`
  font-family: Open Sans, sans-serif;
  width: 100%;
  display: flex;
  align-items: center;
  .computer-setup {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px auto;
    position: relative;
  }

  .monitor {
    width: 200px;
    height: 150px;
    background: #333;
    border-radius: 12px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
    overflow: hidden;
    padding: 10px 5px;
    .screen {
      width: 100%;
      height: 100%;
      border-radius: 8px;
      background-color: RGB(218 218 218);
      display: flex;
      align-items: center;
      justify-content: center;
      /* background-image: url(https://tse2.mm.bing.net/th?id=OIP.B39-1EvwOFXOffOfIKZT0AHaEK&pid=Api&P=0&h=220); */
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }
  }

  .peripherals {
    display: flex;
    align-items: flex-start;
    margin-top: 10px;
    margin-left: 20px;
    .keyboard {
      display: flex;
      flex-direction: column;
      gap: 5px;
      .key-row {
        display: flex;
        gap: 3px;
        .key {
          width: 10px;
          height: 10px;
          background: #fff;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
        }
      }
    }
  }

  .mouse {
    width: 30px;
    height: 45px;
    background: #666;
    border-radius: 20px;
    margin-left: 10px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  }
`;

export const PracticesContainer = styled.div`
  width: 100%;
  height: 100%;
  font-family: Open Sans, sans-serif;
  z-index: 10;
  padding-top: 50px;
`;

export const PracticesContent = styled.div`
  height: 100%;
  width: 100%;
  .background {
    position: fixed;
    z-index: 1;
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
export const TitleTopicContain = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  .test-border {
    border: 1px solid RGB(205 205 205);
    height: 1px;
    width: 20%;
  }
  .title-topic {
    display: inline-block;
    text-align: center;
    font-size: 40px;
    text-transform: uppercase;
    font-weight: 600;
    color: RGB(39 36 67);
    padding: 0 10px;
  }
`;

export const ListPracticesContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  z-index: 1;
  color: white;
  padding: 80px 100px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 30px;
  row-gap: 30px;
  @media ${devices.maxXl} {
    padding: 80px 40px;
  }
  @media ${devices.maxal} {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 30px;
    padding: 80px 20px;
  }
  @media ${devices.maxsm} {
    grid-template-columns: repeat(1, 1fr);
    column-gap: 0px;
  }
`;

export const PracticeItem = styled.div`
  width: 100%;
  border: 1px solid RGB(155 152 164);
  border-radius: 10px;
  align-items: center;
  cursor: default;
  transition: ease-in 0.5s;
  margin-bottom: 50px;
  padding: 0 30px;
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
    width: 100%;
    h1 {
      text-align: center;
      font-size: 20px;
      color: black;
      padding-bottom: 10px;
    }
  }
  .action-contain {
    width: 100%;
    text-align: center;
    border-top: 1px solid RGB(155 152 164);
    padding: 10px 0;
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
