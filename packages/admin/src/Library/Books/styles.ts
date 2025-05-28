import styled from 'styled-components';
import Dialog from '@mui/material/Dialog';
import { devices } from '../DeviceScreen';

export const DetailBookContainer = styled.div`
  width: 100%;
  height: 100%;
  font-family: Open Sans, sans-serif;
  padding-top: 50px;
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
    width: 25%;
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
export const TypeBookContent = styled.div`
  height: 100%;
  width: 100%;
  .background {
    position: absolute;
    top: -60px;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #f0f0f0;
    background-image: radial-gradient(circle, #ccc 1px, transparent 1px);
    background-size: 20px 20px;
    z-index: 1;
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

export const ListBookContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  z-index: 1;
  color: white;
  padding: 80px 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 30px;
  row-gap: 30px;
  @media ${devices.maxlg} {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 30px;
    row-gap: 50px;
  }
  @media ${devices.maxsm} {
    grid-template-columns: repeat(1, 1fr);
    column-gap: 30px;
    row-gap: 50px;
    padding: 80px 40px;
  }
`;

export const BookContainer = styled.div`
  border: 1px solid RGB(155 152 164);
  border-radius: 10px;
  position: relative;
  padding: 0 20px;
  .book-container {
    h1 {
      width: 100%;
      text-align: center;
      font-size: 16px;
      color: black;
      margin-top: 15px;
    }
    h3 {
      width: 100%;
      text-align: center;
      font-size: 16px;
      margin: 8px 0;
    }
    :hover {
      .book-cover {
        animation: openBook 2s infinite alternate ease-in-out;
      }
    }
  }
  .book {
    position: relative;
    width: 180px;
    height: 270px;
    perspective: 1000px;
    margin: 10px auto;
    cursor: pointer;
    .book-cover {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: RGB(137 138 139);
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 8px;
      transform: rotateY(0deg);
      transform-origin: left;
      z-index: 3;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .book-pages {
      position: absolute;
      width: 98%;
      height: 96%;
      background: #fff;
      left: 1%;
      top: 2%;
      border-radius: 6px;
      box-shadow: inset 0 0 0 1px #ccc;
      z-index: 2;
    }

    .book-back {
      position: absolute;
      width: 100%;
      height: 100%;
      background: RGB(213 213 213);
      border-radius: 8px;
      transform: rotateY(-3deg);
      transform-origin: left;
      z-index: 1;
    }
  }
  .action-contain {
    width: 100%;
    text-align: center;
    border-top: 1px solid RGB(155 152 164);
    padding-top: 15px;
    padding-bottom: 15px;
    .update {
      background-color: RGB(21 111 201);
      margin-right: 8px;
      transition: ease-in 0.3s;
      :hover {
        background-color: RGB(16 86 156);
        transition: ease-in 0.3s;
      }
    }
    .delete {
      background-color: RGB(170 26 18);
      margin-left: 8px;
      transition: ease-in 0.3s;
      :hover {
        background-color: RGB(141 19 12);
        transition: ease-in 0.3s;
      }
    }
  }

  @keyframes openBook {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(-30deg);
    }
  }
`;

export const BookDetailItem = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  align-items: center;
  cursor: default;
  transition: ease-in 0.5s;
  :hover {
    transform: translateY(-5px);
    transition: ease-in 0.5s;
  }
  img {
    width: 150px;
    height: 100%;
    border-radius: 10px;
  }
  .content-book {
    width: 100%;
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
      span {
        width: 200px;
        overflow-wrap: anywhere;
        word-break: break-word;
      }
      a {
        overflow-wrap: anywhere;
        word-break: break-word;
        color: white;
        :hover {
          color: RGB(23 123 223);
        }
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

export const ToolbarContainer = styled.div`
  position: fixed;
  z-index: 999;
  bottom: 30px;
  right: 30px;
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
