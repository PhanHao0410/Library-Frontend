import styled from 'styled-components';

export const LogInContainer = styled.div`
  width: 100%;
  height: 100%;
  font-family: Open Sans, sans-serif;
  display: flex;
  align-items: start;
  .icon-title {
    font-size: 60px;
    color: RGB(7 153 146);
    display: flex;
    align-items: start;
    transform: translateY(-10px);
  }
`;

export const TitleContainer = styled.div`
  transform: translateY(10px);
  margin-left: 10px;
  width: 100%;
  .title {
    p {
      margin-top: 20px;
      font-size: 18px;
      color: RGB(103 103 103);
    }
  }
  form {
    margin-top: 30px;
    width: 100%;
    .form-content {
      margin-bottom: 20px;
      p {
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 3px;
      }
      input {
        width: 100%;
        padding: 8px 40px 8px 8px;
        font-size: 16px;
        border: 1px solid RGB(144 144 143);
        border-radius: 4px;
        :hover {
          /* border: 1px solid RGB(144 144 143); */
          outline: 2px solid RGB(223 223 223);
        }
        :focus {
          border: 1px solid RGB(144 144 143);
          outline: 2px solid RGB(160 205 249);
        }
        ::placeholder {
          color: RGB(212 214 215);
        }
      }
      span {
        display: inline-block;
        margin-top: 3px;
        margin-left: 3px;
        color: red;
      }
    }
    .action-container {
      display: flex;
      align-items: center;
      justify-content: end;
      .btn-cancel {
        border: 1px solid RGB(170 170 170);
        color: black;
        margin-right: 10px;
        :hover {
          outline: 2px solid RGB(218 218 218);
        }
      }
      .btn-add {
        background-color: RGB(32 116 234);
        color: white;
        :hover {
          background-color: RGB(0 87 173);
        }
      }
    }
  }
`;

export const AlarmSuccessContainer = styled.div`
  width: 100%;
  height: 100%;
  font-family: Open Sans, sans-serif;
  padding: 40px;
  h1 {
    width: 100%;
    text-align: center;
    font-size: 30px;
  }
  h4 {
    text-align: center;
    width: 100%;
    margin-top: 20px;
    font-size: 18px;
    color: RGB(128 128 128);
    font-weight: 500;
  }
  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
  }
  .btn-exit {
    border: none;
    background-color: RGB(236 50 33);
    color: white;
    padding: 5px 30px;
    font-size: 20px;
    :hover {
      outline: 2px solid RGB(247 138 128);
      background-color: RGB(205 21 4);
    }
  }
`;
