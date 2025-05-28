import styled from 'styled-components';

export const AnimationSuccessContainer = styled.div`
  text-align: center;
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

export const AnimationFailContainer = styled.div`
  max-width: 27rem;
  margin: 20px auto 0;
  .o-circle {
    display: flex;
    width: 80px;
    height: 80px;
    justify-content: center;
    align-items: flex-start;
    border-radius: 50%;
    animation: circle-appearance 0.8s ease-in-out 1 forwards,
      set-overflow 0.1s 1.1s forwards;
  }
  .c-container__circle {
    margin: 0 auto 30px;
  }
  .o-circle__sign {
    position: relative;
    opacity: 0;
    background: #fff;
    animation-duration: 0.8s;
    animation-delay: 0.2s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    ::before,
    ::after {
      content: '';
      position: absolute;
      background: inherit;
    }
    ::after {
      left: 100%;
      top: 0%;
      width: 100%;
      height: 95%;
      transform: translateY(4%) rotate(0deg);
      border-radius: 0;
      opacity: 0;
      animation: set-shaddow 0s 1.13s ease-in-out forwards;
      z-index: -1;
    }
  }
  .o-circle__sign--failure {
    background: rgb(236, 78, 75);
    .o-circle__sign {
      width: 15px;
      height: 80px;
      transform: translateY(25%) rotate(45deg) scale(0.1);
      border-radius: 50% 50% 50% 50% / 10%;
      animation-name: failure-sign-appearance;
      margin-top: -20px;
      ::before {
        top: 50%;
        width: 15px;
        height: 80px;
        margin-left: -8px;
        transform: translateY(-50%) rotate(90deg);
        border-radius: inherit;
      }
      ::after {
        background: rgba(175, 57, 55, 0.8);
        width: 15px;
        display: none;
      }
    }
  }
  @keyframes circle-appearance {
    0% {
      transform: scale(0);
    }

    50% {
      transform: scale(1.5);
    }

    60% {
      transform: scale(1);
    }

    100% {
      transform: scale(1);
    }
  }

  @keyframes failure-sign-appearance {
    50% {
      opacity: 1;
      transform: translateY(25%) rotate(45deg) scale(1.7);
    }

    100% {
      opacity: 1;
      transform: translateY(25%) rotate(45deg) scale(1);
    }
  }

  @keyframes set-shaddow {
    to {
      opacity: 1;
    }
  }

  @keyframes set-overflow {
    to {
      overflow: hidden;
    }
  }
`;
