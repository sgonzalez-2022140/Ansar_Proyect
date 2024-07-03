import React, { useState } from 'react';
import Logo from '../../assets/Logo.png';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavbarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 10px 20px;
  
  width: 100%;
  height: 6.5%;
  top: 0;
  z-index: 1000;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const LogoImage = styled.img`
  height: 50px;
  margin-right: 10px;
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    position: fixed;
    top: 55px; 
    left: 0;
    background-color: #0B8AD9; 
    padding: 20px;
    box-shadow: 0 2px 4px rgba(124, 118, 118, 0.2);
    display: ${props => props.open ? 'flex' : 'none'};
    height: calc(100vh - 55px); 
    align-items: center; 
    color: white; 
  }

  
`;

const MenuIcon = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    font-size: 24px;
    cursor: pointer;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  padding: 10px;
  transition: background-color 0.3s, color 0.3s;

  @media (max-width: 768px) {
    color: white; 
    width: 100%; 
    text-align: center; 
  }

  &:hover {
    background-color: #f0f0f0;
    color: #1a73e8;
    @media (max-width: 768px) {
      background-color: #1a73e8; 
      color: #fff; 
    }
  }
`;



export const NavbarMain = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavbarStyled>
      <NavLink to="/" onClick={() => setIsOpen(false)} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
        <LogoImage src={Logo} alt="Logo" />
        <div>ANSAR</div>
      </NavLink>
      <MenuIcon onClick={() => setIsOpen(!isOpen)}>☰</MenuIcon>
      <LinksContainer open={isOpen}>
        <StyledNavLink to="/historia" onClick={() => setIsOpen(false)}>¿Quiénes somos?</StyledNavLink>
        <StyledNavLink to="/programa" onClick={() => setIsOpen(false)}>Programas</StyledNavLink>
        <StyledNavLink to="/contacto" onClick={() => setIsOpen(false)}>Contacto</StyledNavLink>
        <StyledNavLink to="/galeria" onClick={() => setIsOpen(false)}>Galería</StyledNavLink>
      </LinksContainer>
    </NavbarStyled>
  );
};
