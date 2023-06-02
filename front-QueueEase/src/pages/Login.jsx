import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const LeftSection = styled.div`
  flex: 1;
  background-image: url('https://cdn.pixabay.com/photo/2020/11/09/15/12/trail-5726987_960_720.jpg');
  background-size: cover;
  background-position: center;
`;

const RightSection = styled.div`
flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const Form = styled.form`
  width: 300px;
  padding: 20px;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <LeftSection />
      <RightSection>
        <Form>
          <Input type="text" placeholder="Usuario" />
          <Input type="password" placeholder="Contraseña" />
          <Button type="submit">Iniciar sesión</Button>
        </Form>
      </RightSection>
    </Container>
  );
};

export default Login;