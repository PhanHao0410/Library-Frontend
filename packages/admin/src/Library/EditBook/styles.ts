import styled from 'styled-components';
import Headroom from 'react-headroom';
import Dialog from '@mui/material/Dialog';
import { devices } from '../DeviceScreen';

export const EditBookContainer = styled.div`
  width: 100%;
  height: 100%;
  font-family: Open Sans, sans-serif;
  margin-bottom: 500px;

  .status-first {
    margin-left: 20px;
    padding-top: 80px;
    @media ${devices.maxmd} {
      margin-left: 10px;
    }
  }

  .status {
    margin-left: 20px;
    @media ${devices.maxmd} {
      margin-left: 10px;
    }
  }
  .custome-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
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
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: rgb(137, 138, 139);
    }
    p {
      font-size: 24px;
      font-weight: 600;
      color: white;
      margin-left: 10px;
    }
  }
  .back-container {
    height: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    background-color: rgb(218, 57, 43);
    width: 50px;
    cursor: pointer;
    transition: all 0.2s ease;
    :hover {
      background-color: RGB(155 39 28);
    }
    :active {
      transform: scale(0.95);
      background-color: RGB(235 239 243);
    }
    .icon-back {
      font-size: 35px;
      color: white;
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
`;

export const InfomationStatusContainer = styled.div`
  width: 100%;
  height: 100%;
  .contain {
    display: grid;
    width: 90%;
    height: 100%;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 40px;
    justify-items: center;
    padding-bottom: 30px;
    border-bottom: 1px solid RGB(218 218 218);
    @media ${devices.maxmd} {
      grid-template-columns: repeat(1, 1fr);
      row-gap: 30px;
      width: 100%;
      padding: 30px 20px;
      padding-bottom: 50px;
    }
  }
`;

export const StatusItemContain = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(243, 244, 246);
  padding: 10px;
  min-height: 140px;
  .title-status {
    background-color: rgb(199, 210, 254);
    display: inline-block;
    font-size: 14px;
    font-weight: 600;
    padding: 3px 8px;
    border-radius: 4px;
  }
  .content-status {
    margin-top: 20px;
    width: 100%;
    background-color: white;
    border-radius: 4px;
    padding: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: rgb(137, 138, 139);
    }
    h3 {
      font-size: 14px;
      margin-left: 15px;
    }
  }
`;

export const TimeLineContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px 0;
  border-bottom: 1px solid RGB(218 218 218);
  margin-top: 20px;
  .timer-contain {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .timer-component {
      display: inline-block;
      margin-top: 20px;
      font-size: 30px;
      @media ${devices.maxsm} {
        font-size: 25px;
      }
    }
  }
`;

export const SliderTimeContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 40px;
  @media ${devices.maxmd} {
    padding: 20px;
  }
  .anotion-timer {
    span {
      font-size: 14px;
      :first-child {
        margin-right: 3px;
      }
    }
    p {
      font-size: 14px;
      color: RGB(145 145 145);
    }
  }
  .changetime-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
  }
  .change-expect {
    h2 {
      font-size: 14px;
    }
    .action-container {
      display: flex;
      align-items: center;
      margin-top: 8px;
    }
    input {
      width: 100px;
      padding: 5px 10px;
      font-size: 16px;
      border: 1px solid RGB(194 194 194);
      border-radius: 4px;
      :hover {
        outline: 2px solid RGB(235 235 235);
      }
      :focus {
        border: 1px solid RGB(185 219 253);
        outline: 2px solid RGB(185 219 253);
      }
    }
    .action-expect {
      background-color: RGB(28 121 215);
      color: white;
      min-width: 0px !important;
      min-height: 0px !important;
      font-size: 12px !important;
      padding: 4px 8px;
      margin-left: 5px;
      :hover {
        opacity: 0.8;
      }
    }
  }
  .action-read {
    h2 {
      font-size: 14px;
      margin-bottom: 8px;
    }
    .action-contain {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .action-pause {
      background-color: RGB(226 52 52);
      color: white;
      min-width: 0px !important;
      min-height: 0px !important;
      font-size: 12px !important;
      padding: 4px 8px;
      margin-left: 5px;
      transform: translateY(-1px);
      :hover {
        opacity: 0.8;
      }
    }
    .action-start {
      background-color: RGB(4 163 50) !important;
    }
  }
  .loader-contain {
    width: 30px;
    height: 30px;
    margin-left: 10px;
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
      width: 25px;
      height: 25px;
      border-radius: 50%;
      box-sizing: border-box;
      animation: rotationBack 0.5s linear infinite;
      transform-origin: center center;
    }
    ::before {
      width: 20px;
      height: 20px;
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
`;

export const InfomationBookContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  margin-top: 30px;
  .title-contain {
    display: flex;
    align-items: center;
    .icon-update {
      margin-left: 8px;
      font-size: 24px;
      color: RGB(0 110 220);
      cursor: pointer;
      transition: font-size ease-in 0.2s;
      :hover {
        transition: font-size ease-out 0.2s;
        opacity: 0.8;
        font-size: 28px;
      }
    }
  }
  .content-contain {
    list-style-type: none;
    text-align: center;
    margin-top: 20px;
    padding: 0 100px;
    li {
      margin-bottom: 10px;
      line-height: 1.2rem;
      text-align: center;
      color: RGB(2 43 84);
      .content-span {
        font-size: 16px;
        font-weight: 600;
      }
    }
    @media ${devices.maxmd} {
      padding: 0 20px;
    }
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

      .btn-convert-file {
        font-size: 12px;
        min-height: 0px !important;
        min-width: 0px !important;
        padding: 2px 5px;
        color: black;
        background-color: RGB(239 239 239);
        border: 1px solid black;
        margin-top: 3px;
        :hover {
          background-color: RGB(219 219 219);
          opacity: 0.8;
        }
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

export const DialogWarningContainer = styled(Dialog)`
  #dialog-warning-content {
    padding: 15px 20px;
    width: 100%;
    height: 100%;
    .dialog-title {
      display: flex;
      align-items: center;
      justify-content: center;
      .icon-warning {
        font-size: 40px;
        color: RGB(243 24 24);
      }
      h2 {
        font-size: 24px;
        margin-left: 10px;
        text-align: center;
      }
    }
    h4 {
      width: 100%;
      text-align: center;
      margin-top: 10px;
      font-size: 18px;
      color: RGB(97 99 101);
      cursor: pointer;
      :hover {
        text-decoration: underline solid RGB(97 99 101);
      }
    }
  }

  #dialog-success-content {
    text-align: center;
    h2 {
      margin-top: 20px;
      font-size: 24px;
      margin-left: 10px;
      text-align: center;
    }
    .success-checkmark {
      width: 80px;
      height: 80px;
      margin: 0 auto;

      .check-icon {
        width: 80px;
        height: 80px;
        position: relative;
        border-radius: 50%;
        box-sizing: content-box;
        border: 4px solid #4caf50;

        &::before {
          top: 3px;
          left: -2px;
          width: 30px;
          transform-origin: 100% 50%;
          border-radius: 100px 0 0 100px;
        }

        &::after {
          top: 0;
          left: 30px;
          width: 60px;
          transform-origin: 0 50%;
          border-radius: 0 100px 100px 0;
          animation: rotate-circle 4.25s ease-in;
        }

        &::before,
        &::after {
          content: '';
          height: 100px;
          position: absolute;
          background: #ffffff;
          transform: rotate(-45deg);
          z-index: 2;
        }

        .icon-line {
          height: 5px;
          background-color: #4caf50;
          display: block;
          border-radius: 2px;
          position: absolute;
          z-index: 10;

          &.line-tip {
            top: 46px;
            left: 14px;
            width: 25px;
            transform: rotate(45deg);
            animation: icon-line-tip 0.75s;
          }

          &.line-long {
            top: 38px;
            right: 8px;
            width: 47px;
            transform: rotate(-45deg);
            animation: icon-line-long 0.75s;
          }
        }

        .icon-circle {
          top: -4px;
          left: -4px;
          z-index: 10;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          position: absolute;
          box-sizing: content-box;
          border: 4px solid rgba(76, 175, 80, 0.5);
        }

        .icon-fix {
          top: 8px;
          width: 5px;
          left: 26px;
          z-index: 1;
          height: 85px;
          position: absolute;
          transform: rotate(-45deg);
          background-color: #ffffff;
        }
      }
    }
  }
  .btn-action {
    width: 100%;
    text-align: center;
    margin-top: 20px;
    .btn {
      min-width: 0px !important;
      min-height: 0px !important;
      padding: 3px 10px;
      border: 1px solid RGB(215 215 215);
      background-color: RGB(251 74 74);
      color: white;
      :hover {
        border: 1px solid RGB(252 148 148);
        opacity: 0.9;
      }
    }
  }
  @keyframes rotate-circle {
    0% {
      transform: rotate(-45deg);
    }

    5% {
      transform: rotate(-45deg);
    }

    12% {
      transform: rotate(-405deg);
    }

    100% {
      transform: rotate(-405deg);
    }
  }

  @keyframes icon-line-tip {
    0% {
      width: 0;
      left: 1px;
      top: 19px;
    }

    54% {
      width: 0;
      left: 1px;
      top: 19px;
    }

    70% {
      width: 50px;
      left: -8px;
      top: 37px;
    }

    84% {
      width: 17px;
      left: 21px;
      top: 48px;
    }

    100% {
      width: 25px;
      left: 14px;
      top: 45px;
    }
  }

  @keyframes icon-line-long {
    0% {
      width: 0;
      right: 46px;
      top: 54px;
    }

    65% {
      width: 0;
      right: 46px;
      top: 54px;
    }

    84% {
      width: 55px;
      right: 0px;
      top: 35px;
    }

    100% {
      width: 47px;
      right: 8px;
      top: 38px;
    }
  }
`;

export const ToolbarContainer = styled.div`
  position: fixed;
  z-index: 999;
  bottom: 30px;
  right: 30px;
`;
