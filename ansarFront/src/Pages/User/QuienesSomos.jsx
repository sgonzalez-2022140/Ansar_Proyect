import React from 'react';
import styled from 'styled-components';
import imagen from '../../assets/equipo.jpg';
import doctor from '../../assets/DOC.jpg';

// Estilos para el contenedor principal
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #333;
`;

// Estilos para la sección de cabecera con la imagen de fondo
const Header = styled.div`
  background: url(${imagen}) no-repeat center center;
  background-size: cover;
  //filter: blur(0.5px); 
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center; // Centra el título verticalmente
`;

// Estilos para el título
const Title = styled.h1`
  font-size: 2.5em;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.5); // Fondo oscuro para mejorar legibilidad
  padding: 10px 20px;
  border-radius: 10px;
  z-index: 10; // Asegura que el título no esté desenfocado
`;

// Estilos para el cuerpo principal
const Body = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 20px;
  align-items: center; // Alinea el texto y la imagen verticalmente

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

// Estilos para el texto descriptivo
const Text = styled.div`
  flex: 1;
  padding: 20px;
  font-size: 1.2em;
  line-height: 1.6;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 0 0px; 
`;

// Estilo para la imagen
const Image = styled.img`
  flex: 1;
  width: 100%;
  max-width: 350px;
  height: auto;
  padding: 20px;
`;

export const QuienesSomos = () => {
  return (
    <Container>
      <Header>
        <Title>Nuestro Equipo</Title>
      </Header>
      <Body>
        <Text>
          Somos una asociación dedicada a <strong>mejorar la vida de los niños</strong> a través de un programa
          de ayuda. Nuestro equipo está comprometido con el bienestar de cada
          niño que forma parte de las comunidades con las que trabajamos.
          <br /><br />
          Con 2 años de experiencia, hemos implementado programas que han cambiado vidas y
          creado oportunidades para un futuro mejor. Creemos firmemente en el poder de la comunidad para cambiar el mundo.
        </Text>
        <Image src={doctor} alt="Doctor" />
      </Body>
    </Container>
  );
};