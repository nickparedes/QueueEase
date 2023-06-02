import React from 'react';
import styled from 'styled-components';
import doodle from "../assets/doodle.svg"
import logo from "../assets/logo.png"
import donut from "../assets/donut.svg"
import hamburguer from "../assets/hamburguer.svg"
import LeftSection from '../components/login/LeftSection';
import RightSection from '../components/login/RightSection';


const Container = styled.div`
display: flex;
height: 100vh;
align-content: center;
justify-content: center;
`;


const App = () => {
  return (
    <Container>
      <LeftSection/>
      <RightSection/>
    </Container>
  );
};

export default App;