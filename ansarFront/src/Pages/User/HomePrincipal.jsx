import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Banner from '../../assets/Niños.png'

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const BannerImage = styled.img`
  width: 100%;  
  max-width: 940px;  
  height: auto; 
  object-fit: contain; 
  border-radius: 20px; 
  box-shadow: 0 4px 8px rgba(0,0,0,0.2); 
  margin: 20px auto;  
`;

const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 20px 0;
`;

const NavLinkStyled = styled(NavLink)`
  background-color: #0B8AD9;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 20px;
  text-align: center;
  width: 30%; 
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0675A3;
  }
`;

export const HomePrincipal = () => {
  return (
    <HomePageContainer>
      <BannerImage src={Banner} alt="Banner con niños" />
      <NavigationContainer>
        <NavLinkStyled to="/informacion">Información</NavLinkStyled>
        <NavLinkStyled to="/servicios">Servicios</NavLinkStyled>
        <NavLinkStyled to="/contacto">Contacto</NavLinkStyled>
      </NavigationContainer>
    </HomePageContainer>
  );
};