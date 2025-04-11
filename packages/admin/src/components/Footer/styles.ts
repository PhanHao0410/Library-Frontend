import styled from 'styled-components';
import { devices } from '../../Library/DeviceScreen';

export const FooterContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(246, 244, 240);
  padding: 30px 100px;
  font-family: 'oswald-medium,oswald,sans-serif';
  padding-bottom: 60px;
  @media screen and (max-width: 820px) {
    padding: 30px 50px;
  }
  h2 {
    width: 100%;
    text-align: center;
    margin: 10px 0 40px;
    font-size: 30px;
    font-weight: 500;
  }
`;

export const FooterContent = styled.div`
  width: 100%;
  border-top: 1px solid rgb(155, 152, 164);
  border-bottom: 1px solid rgb(155, 152, 164);
  display: flex;
  justify-content: space-around;
  padding: 50px 0;
  @media screen and (max-width: 820px) {
    display: inline-block;
  }
  h3 {
    font-size: 24px;
  }
  ul {
    margin-top: 20px;
    li {
      display: flex;
      align-items: center;
      font-size: 18px;
      margin-bottom: 15px;
      color: rgb(144, 144, 143);
      transition: ease-in 0.5s;
      :hover {
        transform: translateY(-5px);
        transition: ease-in 0.5s;
      }
      a {
        color: rgb(144, 144, 143);
      }
      .icon-contact {
        margin-right: 8px;
        font-size: 30px;
      }
    }
  }
  .social-item {
    margin-top: 20px;
    a {
      color: rgb(144, 144, 143);
      margin-right: 20px;

      .icon-social {
        font-size: 40px;
        transition: ease-in-out 0.5s;
        :hover {
          transform: translateY(-5px);
          transition: ease-in-out 0.5s;
        }
      }
    }
  }
`;
