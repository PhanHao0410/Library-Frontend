import { Dialog } from '@mui/material';
import styled from 'styled-components';

export const ShowPdfContainer = styled(Dialog)`
  position: relative;
  /* .btn-exit {
    position: absolute;
    right: 0;
    top: 0;
    min-width: 0px !important;
    min-height: 0px !important;
    font-size: 14px !important;
    font-weight: 600;
    padding: 2px 8px;
    border: 1px solid RGB(205 205 205);
    color: white;
    background-color: RGB(194 2 2);
    :hover {
      background-color: RGB(226 52 52);
      opacity: 0.9;
    }
  } */
  #alert-dialog-content {
    font-family: oswald-medium, oswald, sans-serif;
    padding: 10px 20px;
  }
`;

export const ShowPdfTitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  h2 {
    color: rgb(39, 36, 67);
    font-size: 25px;
  }
  h4 {
    font-size: 18px;
    margin-bottom: 0px;
    text-align: center;
  }
  .btn-pause {
    background-color: RGB(226 52 52);
    color: white;
    min-width: 0px !important;
    min-height: 0px !important;
    font-size: 12px !important;
    padding: 2px 5px;
    :hover {
      background-color: RGB(226 52 52);
      opacity: 0.8;
    }
  }
`;

export const ShowPdfContentContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid RGB(209 204 204);
  position: relative;
  display: flex;
  .content-container {
    width: 100%;
    .title-content {
      width: 100%;
      text-align: center;
      padding: 5px 0;
      border-bottom: 1px solid RGB(183 186 190);
      display: flex;
      align-items: center;
      justify-content: space-between;
      .btn-zoom {
        min-width: 0px !important;
        min-height: 0px !important;
        font-size: 12px !important;
        padding: 4px 8px;
        border: 1px solid RGB(205 205 205);
        color: black;
        background-color: RGB(249 249 249);
        margin-right: 3px;
        :hover {
          outline: 1px solid RGB(209 232 255);
          background-color: RGB(228 237 246);
        }
      }
      .disabled-button {
        cursor: not-allowed !important;
        opacity: 0.3 !important;
      }
    }
    .pdf-container {
      display: flex;
      justify-content: center;
      padding: 20px;
      position: relative;
      overflow-x: auto;
    }
    .pdf-document {
      border: 1px solid #ccc;
      position: relative;
    }

    .pdf-page {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
  }
`;

export const ShowPdfAction = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
