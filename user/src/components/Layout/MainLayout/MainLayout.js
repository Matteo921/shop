import React from "react";
import PageContainer from '/PageContainer/PageContainer';
import NavBar from '/components/NavBar/NavBar';
import Footer from '../../Layout/Footer/Footer';

const MainLayout = ({ children }) => (
  <div>
    <PageContainer>
      <NavBar />
      {children}
      <Footer />
    </PageContainer>
  </div>
);

export default MainLayout;