import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

const Card = styled.div`
  background-color: #ffffff;
  width: 300px;
  height: 300px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const Icon = styled.img`
  width: 50%;
`;

const Button = styled(NavLink)`
  background-color: #0B8AD9;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 20px;
  margin-top: 20px;
`;

export const HomePrincipal = () => {
  return (
    <HomePageContainer>
      <h1>Bienvenidos a ANSAR</h1>
      <CardContainer>
        <Card>
          <Icon src="/path-to-info-icon.png" alt="Información" />
          <Button to="/informacion">Información</Button>
        </Card>
        <Card>
          <Icon src="/path-to-services-icon.png" alt="Servicios" />
          <Button to="/servicios">Servicios</Button>
        </Card>
        <Card>
          <Icon src="/path-to-contact-icon.png" alt="Contacto" />
          <Button to="/contacto">Contacto</Button>
        </Card>
      </CardContainer>
    </HomePageContainer>
  );
};