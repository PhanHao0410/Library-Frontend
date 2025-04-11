import React from 'react';

import AppBar from '../../components/AppBar';
import TypeBooks from '../TypeBook';
import Footer from '../../components/Footer';

const HomePage = () => {
  return (
    <div>
      <AppBar />
      <TypeBooks />
      <Footer />
    </div>
  );
};

export default HomePage;
