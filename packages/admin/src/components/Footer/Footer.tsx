import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import PlaceIcon from '@mui/icons-material/Place';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

import { FooterContainer, FooterContent } from './styles';

const Footer = () => {
  return (
    <FooterContainer>
      <h2>Setbacks are not failures but lessons</h2>
      <FooterContent>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>
              <EmailIcon className="icon-contact" />
              <a href="mailto:phanhao0410@gmail.com" target="blank">
                Email: phanhao0410@gmail.com
              </a>
            </li>
            <li>
              <PhoneInTalkIcon className="icon-contact" />
              <span>ĐT: 0393410712</span>
            </li>
            <li>
              <PlaceIcon className="icon-contact" />
              <span>Location: 32 Phùng Khoang, Nam Từ Liêm, Hà Nội</span>
            </li>
          </ul>
        </div>
        <div>
          <h3>Social Media</h3>
          <div className="social-item">
            <a
              href="https://www.facebook.com/thanhhao.phan.391/"
              target="blank"
            >
              <FacebookIcon className="icon-social" />
            </a>
            <a
              href="https://github.com/PhanHao0410?tab=repositories"
              target="blank"
            >
              <GitHubIcon className="icon-social" />
            </a>
            <a href="https://www.youtube.com/" target="blank">
              <YouTubeIcon className="icon-social" />
            </a>
          </div>
        </div>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
