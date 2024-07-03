import React from 'react';
import styled from 'styled-components';
import { NavbarMain } from './NavbarMain';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;  
  height: 100vh;
  margin: 0;
`;

const Content = styled.div`
  flex-grow: 1;
  
  background-color: #f0f0f0;
  overflow-y: auto;  
`;

const LayoutMain = ({ children }) => {
  return (
    <MainContainer>
      <NavbarMain />
      <Content>
        {children}
      </Content>
    </MainContainer>
  );
};

export default LayoutMain;