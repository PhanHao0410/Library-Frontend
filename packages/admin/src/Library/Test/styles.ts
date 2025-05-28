import styled from 'styled-components';
import { devices } from '../DeviceScreen';

export const EditBookContainer = styled.div`
  width: 100%;
  height: 100%;
  font-family: Open Sans, sans-serif;
  margin-bottom: 200px;
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .box {
    width: 100px;
    height: 40px;
    transition: width 0.5s ease, height 0.5s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-color: #f0f0f0;
    border-radius: 8px;
  }

  .box.expanded {
    width: 400px;
    height: 300px;
  }

  .create-button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }

  .create-form {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px;
  }

  .create-form input {
    margin-bottom: 10px;
    padding: 8px;
    font-size: 14px;
  }

  .create-form button {
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
  }
`;

export const BookContainer = styled.div`
  border: 1px solid RGB(157 157 157);
  width: 100%;
  height: 100%;
  .computer-setup {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px auto;
    width: 400px;
    position: relative;
  }

  .monitor {
    width: 200px;
    height: 150px;
    background: #333;
    border-radius: 12px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
    overflow: hidden;
    padding: 10px;
  }

  .screen {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(https://tse2.mm.bing.net/th?id=OIP.B39-1EvwOFXOffOfIKZT0AHaEK&pid=Api&P=0&h=220);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .peripherals {
    display: flex;
    align-items: flex-start;
    margin-top: 10px;
    margin-left: 20px;
  }

  .keyboard {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .key-row {
    display: flex;
    gap: 3px;
  }

  .key {
    width: 10px;
    height: 10px;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
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
