import styled from 'styled-components';
import { Dialog } from '@mui/material';
import { devices } from '../DeviceScreen';

export const BookContainer = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  font-family: 'oswald-medium,oswald,sans-serif';
  margin-top: -80px;
  position: relative;
  z-index: 0;
  .list-type-container {
    width: 100%;
    padding: 20px 60px;
    position: relative;
    z-index: 10;
    @media ${devices.maxal} {
      padding: 20px 10px;
    }
    .title-container {
      display: flex;
      align-items: center;
      width: 100%;
      .text-title {
        font-size: 30px;
        padding: 0 8px;
        color: rgb(39, 36, 67);
      }
      span {
        border: 1px solid RGB(194 194 194);
        :first-child {
          width: 10%;
        }
        :last-child {
          width: 100%;
        }
      }
    }
  }
`;

export const PosterContainer = styled.div`
  width: 100%;
  height: 80vh;
  background-image: url('https://static.wixstatic.com/media/c837a6_aa803204cef842e0b9ad7d820e64f77c~mv2.jpg/v1/fill/w_2281,h_1000,al_b,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_aa803204cef842e0b9ad7d820e64f77c~mv2.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  padding: 0 80px;
  z-index: 1;
  @media ${devices.maxlg} {
    padding: 0 40px;
  }

  .title-container {
    transform: translateY(-100px);
    color: rgb(39, 36, 67);
    h2 {
      font-size: 90px;
    }
    h4 {
      font-size: 35px;
    }
  }
`;

export const ListTypeContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  transform: translateY(-16px);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 50px 40px;
  justify-items: center;
  border-left: 2px solid red;
  border-right: 2px solid red;
  border-bottom: 2px solid red;
  border: 2px solid RGB(194 194 194);
  border-top: none;
  overflow-x: auto;
  @media ${devices.maxal} {
    padding: 50px 20px;
  }
`;

export const TypeBookContainer = styled.div`
  height: 320px;
  border-radius: 15px;
  cursor: pointer;
  position: relative;
  z-index: 10;
  width: 250px;
  min-width: 250px;
  margin-right: 40px;

  .img-container {
    height: 100%;
    width: 100%;
    background-color: RGB(168 168 168);
    filter: blur(2px) brightness(90%);
    border-radius: 15px;
    :hover {
      border-radius: 15px !important;
      filter: blur(0px) brightness(100%);
      img {
        border-radius: 15px;
      }
    }
    img {
      width: 250px !important;
      height: 320px !important;
      border-radius: 15px;
      transition: transform 0.3s ease, clip-path 0.3s ease;
      clip-path: inset(0);
      :hover {
        border-radius: 15px !important;
        transform: scale(1.1);
        clip-path: inset(5% 5%);
      }
    }
  }
  .title-avt {
    font-size: 30px;
    position: absolute;
    z-index: 20;
    transform: translateY(-150px);
    margin: 0 20px;
    color: white;
  }
  :hover {
    .title-avt {
      display: none;
    }
  }
`;

export const CreateTypeContainer = styled.div`
  .box {
    width: 80px;
    height: 80px;
    transition: width 0.5s ease, height 0.5s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-color: #f0f0f0;
    border-radius: 50%;
    border: 1px solid black;
    margin-left: 20px;
    .icon-add {
      font-size: 50px;
    }
  }

  .expanded {
    height: 320px;
    border-radius: 15px;
    position: relative;
    z-index: 10;
    width: 250px;
    min-width: 250px;
    margin-right: 40px;
    border: 1px solid RGB(169 169 169);
    background-color: RGB(247 247 247);
  }

  .create-button {
    cursor: pointer;
  }
`;

export const FormCreateContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 10px;
  h2 {
    width: 100%;
    text-align: center;
    font-size: 24px;
    margin-bottom: 5px;
  }
  .type-item {
    width: 100%;
    margin-bottom: 12px;
    p {
      margin-bottom: 3px;
      font-size: 16px;
      font-weight: 600;
    }
    input {
      width: 100%;
      border-radius: 4px;
      border: 1px solid RGB(144 144 143);
      padding: 4px 15px 4px 8px;
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
    span {
      display: inline-block;
      font-size: 12px;
      color: red;
      margin-left: 8px;
      transform: translateY(-2px);
    }
  }
  .btn-container {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    .btn-cancel {
      border: 1px solid RGB(131 131 131);
      margin-right: 15px;
      color: black;
      min-width: 0px !important;
      min-height: 0px !important;
      padding: 2px 5px;
      :hover {
        outline: 3px solid RGB(227 227 227);
      }
    }
    .btn-update {
      color: white;
      background-color: RGB(48 140 231);
      min-width: 0px !important;
      min-height: 0px !important;
      padding: 2px 5px;
      :hover {
        outline: 3px solid RGB(171 210 248);
      }
    }
  }
  .loader-contain {
    width: 48px;
    height: 48px;
    margin-top: 7px;
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

export const DescribeBookContainer = styled.div`
  height: 50vh;
  width: 100%;
  background-color: rgb(246, 244, 240);
  transform: translateY(-100px);
`;

export const DialogContainer = styled(Dialog)`
  #alert-dialog-content {
    margin-bottom: 10px 20px !important;
    text-align: center;
    h2 {
      font-size: 22px;
      margin-top: 25px;
    }
    h4 {
      font-size: 18px;
      color: RGB(153 153 153);
      margin-top: 8px;
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
  }
`;
