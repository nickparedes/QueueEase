import React from 'react'
import styled from 'styled-components';
import doodle from "../../assets/doodle.svg"
import logo from "../../assets/logo.png"
import donut from "../../assets/donut.svg"
import hamburguer from "../../assets/hamburguer.svg"


const LeftSection = () => {
  return (
    <Leftsection>
        <div className='top'>
            <img src={doodle} alt="Descripción de la imagen" />
            <img src={doodle} alt="Descripción de la imagen" />
        </div>
        <div className='mid'>
            <img src={logo} alt="Descripción de la imagen" />
        </div>
        <div className='bottom'>
            <img src={hamburguer} alt="Descripción de la imagen" />
            <img src={donut} alt="Descripción de la imagen" />
            
        </div>
   </Leftsection>
  )
}

const Leftsection = styled.div`
  flex: 1;
  /* background-image: url('https://cdn.pixabay.com/photo/2020/11/09/15/12/trail-5726987_960_720.jpg'); */
  background-color:#f89d1b; 
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .top{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .mid{

  }

  .bottom{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
    
  @media (max-width: 768px) {
    display: none;
  }
`;


export default LeftSection