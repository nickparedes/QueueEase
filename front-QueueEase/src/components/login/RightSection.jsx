import React from 'react'
import LoginForm from './LoginForm';
import styled from 'styled-components';

const RightSection = () => {
  return (
    <Rightsection>
        <LoginForm/>
    </Rightsection>
  )
}

const Rightsection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;

  @media (max-width: 768px) {
   /*  background-image: url('https://cdn.pixabay.com/photo/2020/11/09/15/12/trail-5726987_960_720.jpg'); */
   background-color:#f89d1b; 
  }
`;



export default RightSection