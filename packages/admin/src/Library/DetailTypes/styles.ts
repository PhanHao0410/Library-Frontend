import styled from 'styled-components';
import Headroom from 'react-headroom';
import Dialog from '@mui/material/Dialog';

import { devices } from '../DeviceScreen';

export const DetailTypeContainer = styled.div`
  width: 100%;
  height: 100%;
  font-family: Open Sans, sans-serif;
  position: relative;
  z-index: 0;
`;

export const HeadRoomContainer = styled(Headroom)`
  .headroom {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
  }

  .headroom--pinned {
    transform: translateY(0%);
    transition: transform 0.3s ease-in-out;
  }

  .headroom--unpinned {
    transform: translateY(-100%);
    transition: transform 0.3s ease-in-out;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  padding: 0 80px;
  display: flex;
  justify-content: space-between;
  animation: slideDown 1s ease-out forwards;
  @media ${devices.maxsm} {
    padding: 0 5px;
  }
  .type-book {
    font-family: 'oswald-medium,oswald,sans-serif';
    display: inline-flex;
    background-color: rgb(218, 57, 43);
    height: 60px;
    padding: 0 10px;
    align-items: center;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    max-width: 250px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    img {
      width: 50px;
      height: 50px;
    }
    p {
      font-size: 24px;
      font-weight: 600;
      color: white;
      margin-left: 10px;
    }
  }
  .toggle-container {
    display: flex;
    align-items: center;
    justify-content: center;
    .toggle-item {
      padding: 8px 10px;
      background-color: white;
      border-radius: 8px;
      cursor: pointer;
      opacity: 0.7;
      transition: background-color 0.7s ease;
      :first-child {
        margin-right: 3px;
      }
      .icon {
        font-size: 30px;
      }
      :hover {
        background-color: rgb(218, 57, 43);
        opacity: 0.8;
        transition: background-color 0.7s ease;
      }
    }
    .toggle-select {
      background-color: rgb(218, 57, 43);
      opacity: 1;
      padding: 12px 14px;
      border-radius: 8px;
      color: white;
      transition: background-color 0.7s ease;
      :first-child {
        margin-right: 3px;
      }
    }
  }
  .loader-contain {
    width: 48px;
    height: 48px;
    margin-top: 10px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    border: 3px solid;
    border-color: RGB(173 173 173) RGB(173 173 173) transparent transparent;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    ::after,
    ::before {
      content: '';
      box-sizing: border-box;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      border: 3px solid;
      border-color: transparent transparent #ff3d00 #ff3d00;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      box-sizing: border-box;
      animation: rotationBack 0.5s linear infinite;
      transform-origin: center center;
    }
    ::before {
      width: 32px;
      height: 32px;
      border-color: RGB(173 173 173) RGB(173 173 173) transparent transparent;
      animation: rotation 1.5s linear infinite;
    }
  }
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes rotationBack {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
  @keyframes slideDown {
    from {
      transform: translateY(-100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
export const ToolbarContainer = styled.div`
  position: fixed;
  z-index: 999;
  bottom: 30px;
  right: 30px;
`;

export const DialogCreateContainer = styled(Dialog)`
  #alert-dialog-content {
    display: flex;
    margin-bottom: 20px !important;
    .icon-create {
      font-size: 40px;
      color: RGB(92 240 97);
    }
    .form-create-book {
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
