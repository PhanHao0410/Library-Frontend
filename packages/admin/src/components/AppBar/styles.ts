import styled from 'styled-components';
import Headroom from 'react-headroom';
import { devices } from '../../Library/DeviceScreen';

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

export const AppBarContainer = styled.div`
  height: 60px;
  width: 100%;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;
  animation: slideDown 1s ease-out forwards;

  @media ${devices.maxlg} {
    padding: 0 40px;
  }
  @media ${devices.maxsm} {
    padding: 0 10px;
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

export const AppBarLibrary = styled.div`
  height: 100%;
  max-width: 40%;
  min-width: 270px;
  display: flex;
  align-items: center;
  background-color: rgb(218, 57, 43);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;

  img {
    height: 50px;
    width: 50px;
  }
  h3 {
    font-family: 'Montserrat';
    font-weight: 800;
    line-height: 1em;
    font-size: 30px;
    color: white;
    margin-left: 8px;
  }
`;

export const AppbarLoginContainer = styled.div`
  display: inline-block;
  height: 100%;
  .login-container {
    display: flex;
    align-items: center;
    height: 100%;
    background-color: transparent;
    font-size: 16px;
    padding: 0 5px;
    border-radius: 4px;
    cursor: pointer;
    :hover {
      opacity: 0.7;
    }
    .icon-login {
      font-size: 50px;
      color: RGB(218 57 43);
    }
    .icon-avt {
      font-size: 40px;
      color: RGB(218 57 43);
    }
  }
  .avt-container {
    border-radius: 50%;
    background-color: RGB(218 57 43);
    height: 50px;
    width: 50px;
    margin-top: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    .icon-avt {
      font-size: 40px;
      color: RGB(218 218 218);
    }
  }
`;

export const TabsContainer = styled.div`
  max-width: 60%;
  width: 40%;
  min-width: 400px;
  height: 100%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px !important;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  p {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 400;
    padding: 10px;
    transition: background-color 1s;
    :first-child {
      border-bottom-left-radius: 15px;
    }
    :last-child {
      border-bottom-right-radius: 15px;
    }
    :hover {
      cursor: pointer;
      background-color: rgb(218, 57, 43);
      color: white;
    }
  }
  .tab-selected {
    background-color: rgb(218, 57, 43);
    color: white;
  }
  @media ${devices.maxlg} {
    display: none;
  }
`;

export const MenuContainer = styled.div`
  width: 60px;
  height: 100%;
  .toggle-container {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    background-color: white;
    transition: 1s;
  }
  .menu-clicked {
    background-color: rgb(218, 57, 43);
    span:nth-child(1) {
      transform: translateY(10px) rotate(45deg);
      height: 3px !important;
      background-color: white !important;
    }
    span:nth-child(2) {
      opacity: 0;
    }
    span:nth-child(3) {
      background-color: white !important;
      transform: translateY(-10px) rotate(-45deg);
      height: 3px !important;
    }
  }
  .menu-toggle {
    width: 35px;
    height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: transparent;
    border: none;
    cursor: pointer;
    position: relative;
  }

  .menu-toggle span {
    width: 100%;
    background: black;
    transition: all 0.3s ease;
    position: absolute;
    :nth-child(1) {
      top: 8px;
      height: 2.5px;
    }
    :nth-child(2) {
      top: 18px;
      height: 3px;
    }
    :nth-child(3) {
      top: 28px;
      height: 3.8px;
    }
  }
  @media ${devices.lg} {
    display: none;
  }
`;

export const DrawerContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  align-items: center;
  animation: slideDown 0.5s ease-out forwards;
  color: black;
  z-index: 999;
  position: absolute;
  ul {
    width: 100%;
    margin: 0 80px;
    list-style-type: none;
    .tab-selected {
      color: RGB(218 57 43);
    }
  }
  li {
    font-size: 30px;
    color: white;
    margin: 20px 0;
    padding: 20px 0;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: color 0.5s;

    :hover {
      color: RGB(218 57 43);
    }
    p {
      margin-left: 10px;
    }
    .icon {
      font-size: 30px;
    }
  }
  @keyframes slideDown {
    from {
      transform: translateY(-50%);
      opacity: 0.3;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
