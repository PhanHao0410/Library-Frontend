import styled from 'styled-components';

export const WarnNoDataContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Open Sans, sans-serif;

  h1 {
    font-size: 35px;
    color: white;
    transform: translateY(0px);
  }
  .text-warn {
    font-size: 35px;
    color: RGB(2 40 78);
    transform: translateY(0px);
  }

  .warn-data {
    width: 180px;
    height: 140px;
    display: block;
    margin: 0 auto 20px;

    background-image: radial-gradient(
        circle 25px at 25px 25px,
        #fff 100%,
        transparent 0
      ),
      radial-gradient(circle 50px at 50px 50px, #fff 100%, transparent 0),
      radial-gradient(circle 25px at 25px 25px, #fff 100%, transparent 0),
      radial-gradient(circle 15px at 15px 15px, #fff 100%, transparent 0),
      linear-gradient(#fff 50px, transparent 0);
    background-size: 50px 50px, 100px 75px, 50px 50px, 30px 32px, 136px 20px;
    background-repeat: no-repeat;
    background-position: 0px 30px, 30px 0px, 113px 29px, 147px 50px, 23px 60px;
    position: relative;
    box-sizing: border-box;
    ::after {
      content: '';
      position: absolute;
      left: 2px;
      top: 65px;
      width: 2px;
      height: 6px;
      color: #fff;
      box-sizing: border-box;
      animation: animloader 0.6s linear infinite;
    }
  }

  .warn-data-gray {
    width: 180px;
    height: 140px;
    display: block;
    margin: 0 auto 20px;

    background-image: radial-gradient(
        circle 25px at 25px 25px,
        RGB(199 199 199) 100%,
        transparent 0
      ),
      radial-gradient(
        circle 50px at 50px 50px,
        RGB(199 199 199) 100%,
        transparent 0
      ),
      radial-gradient(
        circle 25px at 25px 25px,
        RGB(199 199 199) 100%,
        transparent 0
      ),
      radial-gradient(
        circle 15px at 15px 15px,
        RGB(199 199 199) 100%,
        transparent 0
      ),
      linear-gradient(RGB(199 199 199) 50px, transparent 0);
    background-size: 50px 50px, 100px 75px, 50px 50px, 30px 32px, 136px 20px;
    background-repeat: no-repeat;
    background-position: 0px 30px, 30px 0px, 113px 29px, 147px 50px, 23px 60px;
    position: relative;
    box-sizing: border-box;
    ::after {
      content: '';
      position: absolute;
      left: 2px;
      top: 65px;
      width: 2px;
      height: 6px;
      color: RGB(199 199 199);
      box-sizing: border-box;
      animation: animloaderGray 0.6s linear infinite;
    }
  }

  @keyframes animloader {
    0% {
      box-shadow: 25px 0 white, 50px 0 white, 75px 0 white, 100px 0 white,
        125px 0 white, 150px 0 white, 25px 0 white, 50px 0 white, 75px 0 white,
        100px 0 white, 125px 0 white, 150px 0 white;
    }
    50% {
      box-shadow: 25px 20px white, 50px 60px rgba(255, 255, 255, 0),
        75px 30px rgba(255, 255, 255, 0), 100px 70px rgba(255, 255, 255, 0),
        125px 40px white, 150px 60px rgba(255, 255, 255, 0), 25px 20px white,
        50px 30px white, 75px 10px white, 100px 30px white,
        125px 30px rgba(255, 255, 255, 0), 150px 30px rgba(255, 255, 255, 0);
    }
    100% {
      box-shadow: 25px 60px rgba(255, 255, 255, 0),
        50px 60px rgba(255, 255, 255, 0), 75px 50px rgba(255, 255, 255, 0),
        100px 70px rgba(255, 255, 255, 0), 125px 70px rgba(255, 255, 255, 0),
        150px 60px rgba(255, 255, 255, 0), 25px 80px rgba(255, 255, 255, 0),
        50px 80px rgba(255, 255, 255, 0), 75px 70px rgba(255, 255, 255, 0),
        100px 60px rgba(255, 255, 255, 0), 125px 30px rgba(255, 255, 255, 0),
        150px 30px rgba(255, 255, 255, 0);
    }
  }

  @keyframes animloaderGray {
    0% {
      box-shadow: 25px 0 RGB(199 199 199), 50px 0 RGB(199 199 199),
        75px 0 RGB(199 199 199), 100px 0 RGB(199 199 199),
        125px 0 RGB(199 199 199), 150px 0 RGB(199 199 199),
        25px 0 RGB(199 199 199), 50px 0 RGB(199 199 199),
        75px 0 RGB(199 199 199), 100px 0 RGB(199 199 199),
        125px 0 RGB(199 199 199), 150px 0 RGB(199 199 199);
    }
    50% {
      box-shadow: 25px 20px RGB(199 199 199), 50px 60px rgba(255, 255, 255, 0),
        75px 30px rgba(255, 255, 255, 0), 100px 70px rgba(255, 255, 255, 0),
        125px 40px RGB(199 199 199), 150px 60px rgba(255, 255, 255, 0),
        25px 20px RGB(199 199 199), 50px 30px RGB(199 199 199),
        75px 10px RGB(199 199 199), 100px 30px RGB(199 199 199),
        125px 30px rgba(255, 255, 255, 0), 150px 30px rgba(255, 255, 255, 0);
    }
    100% {
      box-shadow: 25px 60px rgba(255, 255, 255, 0),
        50px 60px rgba(255, 255, 255, 0), 75px 50px rgba(255, 255, 255, 0),
        100px 70px rgba(255, 255, 255, 0), 125px 70px rgba(255, 255, 255, 0),
        150px 60px rgba(255, 255, 255, 0), 25px 80px rgba(255, 255, 255, 0),
        50px 80px rgba(255, 255, 255, 0), 75px 70px rgba(255, 255, 255, 0),
        100px 60px rgba(255, 255, 255, 0), 125px 30px rgba(255, 255, 255, 0),
        150px 30px rgba(255, 255, 255, 0);
    }
  }
`;
