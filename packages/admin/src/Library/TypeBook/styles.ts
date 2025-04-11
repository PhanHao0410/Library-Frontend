import styled from 'styled-components';
import { devices } from '../DeviceScreen';

export const BookContainer = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  font-family: 'oswald-medium,oswald,sans-serif';
`;

export const PosterContainer = styled.div`
  width: 100%;
  height: 100vh;
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
  z-index: 10;
  transform: translateY(-150px);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 40px;
  padding: 0 80px;
  justify-items: center;
  @media ${devices.maxal} {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 40px;
    padding: 0 40px;
  }
  @media ${devices.maxsm} {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 40px;
    column-gap: 0px;
  }
`;

export const TypeBookContainer = styled.div`
  height: 350px;
  border-radius: 15px;
  cursor: pointer;
  position: relative;
  max-width: 280px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    transition: transform 0.3s ease, clip-path 0.3s ease;
    clip-path: inset(0);
    filter: blur(2px) brightness(90%);
    :hover {
      border-radius: 15px !important;
      transform: scale(1.1);
      clip-path: inset(5% 5%);
      filter: blur(0px) brightness(100%);
    }
  }
  .title-avt {
    font-size: 30px;
    position: absolute;
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

export const DescribeBookContainer = styled.div`
  height: 50vh;
  width: 100%;
  background-color: rgb(246, 244, 240);
  transform: translateY(-100px);
`;
