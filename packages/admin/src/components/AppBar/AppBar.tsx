import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import { useMediaQuery } from '@mui/material';

import {
  AppBarContainer,
  AppBarLibrary,
  TabsContainer,
  MenuContainer,
  DrawerContainer,
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
  const checkScreen = useMediaQuery('(max-width:960px)');

  const clickTabSelected = (id: string) => {
    setTabSelected(id);
  };
  return (
    <>
      <AppBarContainer>
        <AppBarLibrary
          style={clickMenu && checkScreen ? { opacity: '0' } : null}
        >
          <img
            src="https://www.nicepng.com/png/full/10-101646_books-png.png"
            alt="avatar_library"
          />
          <h3>{`Hao's Library`}</h3>
        </AppBarLibrary>
        {/* <TabsContainer>
          {TABS &&
            TABS.map((item) => {
              return (
                <p
                  onClick={() => clickTabSelected(item.id)}
                  className={tabSelected === item.id ? 'tab-selected' : null}
                  role="presentation"
                  key={item.id}
                >
                  {item.title}
                </p>
              );
            })}
          
        </TabsContainer>
        <MenuContainer>
          <div
            className={`toggle-container ${clickMenu ? 'menu-clicked' : null}`}
            onClick={() => setClickMenu(!clickMenu)}
            role="presentation"
          >
            <button className="menu-toggle" type="button">
              <span />
              <span />
              <span />
            </button>
          </div>
        </MenuContainer> */}
      </AppBarContainer>
      {/* <DrawerContainer
        style={
          clickMenu && checkScreen ? { display: 'flex' } : { display: 'none' }
        }
      >
        <ul>
          {TABS &&
            TABS.map((item) => {
              return (
                <li
                  key={item.id}
                  className={tabSelected === item.id ? 'tab-selected' : null}
                  onClick={() => clickTabSelected(item.id)}
                  role="presentation"
                >
                  {item.icon}
                  <p>{item.title}</p>
                </li>
              );
            })}
        </ul>
      </DrawerContainer> */}
    </>
  );
};

export default AppBar;
