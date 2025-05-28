import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import LoginIcon from '@mui/icons-material/Login';
import { useMediaQuery } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import { isHavingToken, isTokenExpiry } from '../../utils/localStorage';
import LogIn from '../../Library/LogIn';

import {
  AppBarContainer,
  AppBarLibrary,
  TabsContainer,
  MenuContainer,
  DrawerContainer,
  HeadRoomContainer,
  AppbarLoginContainer,
} from './styles';

const TABS = [
  { title: 'Homepage', id: 'homepage', icon: <HomeIcon className="icon" /> },
  {
    title: 'Library',
    id: 'library',
    icon: <LocalLibraryIcon className="icon" />,
  },
  {
    title: 'Product',
    id: 'product',
    icon: <Inventory2Icon className="icon" />,
  },
  {
    title: 'Contact',
    id: 'contact',
    icon: <ContactEmergencyIcon className="icon" />,
  },
];
const AppBar = () => {
  const [tabSelected, setTabSelected] = useState<string>('homepage');
  const [clickMenu, setClickMenu] = useState<boolean>(false);
  const [openDialogLogin, setOpenDialogLogin] = useState<boolean>(false);
  const checkScreen = useMediaQuery('(max-width:960px)');

  const clickTabSelected = (id: string) => {
    setTabSelected(id);
  };
  return (
    <>
      <HeadRoomContainer pinStart={100}>
        <AppBarContainer>
          <AppBarLibrary
            style={clickMenu && checkScreen ? { opacity: '0' } : null}
          >
            <img
              src="https://www.nicepng.com/png/full/10-101646_books-png.png"
              alt="avatar_library"
            />
            <h3>My Library</h3>
          </AppBarLibrary>
          <AppbarLoginContainer>
            {isHavingToken() && isTokenExpiry() ? (
              <div className="avt-container">
                <PersonIcon className="icon-avt" />
              </div>
            ) : (
              <Tooltip title="LogIn" arrow>
                <div
                  className="login-container"
                  onClick={() => setOpenDialogLogin(true)}
                  role="presentation"
                >
                  <LoginIcon className="icon-login" />
                </div>
              </Tooltip>
            )}
          </AppbarLoginContainer>
        </AppBarContainer>
      </HeadRoomContainer>
      <LogIn
        openDialogLogin={openDialogLogin}
        setOpenDialogLogin={setOpenDialogLogin}
      />
    </>
  );
};

export default AppBar;
