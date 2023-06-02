import React from 'react'
import styled from 'styled-components'

const LoginForm = () => {
  return (
    <Container>
          <h2>Iniciar sesión</h2>
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" id="email" />
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" />
          <button type="submit">Iniciar sesión</button>
    </Container>
  )
}

const Container = styled.div`
    max-width: 400px;
    padding: 40px;
    border-radius: 4px;

    @media (max-width: 768px) {
        margin-top: -80px;
    
    }
`

export default LoginForm