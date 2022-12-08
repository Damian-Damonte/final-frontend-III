import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import DrawerAppBar from './Navbar';
import { MainContainer } from './styledComponents';

const Layout = () => {

  return (
    <MainContainer >
      <DrawerAppBar/>
      <Outlet />
      <Footer />
    </MainContainer>
  );
}

export default Layout;
