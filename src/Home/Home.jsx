import React from 'react';
import { StyledConteiner, FundoConteiner} from './styles.js';
import Celular from '../components/celular/Celular.jsx'


const Home = () => {
  return (
    <>
    <StyledConteiner>
        <FundoConteiner />
        <Celular />
        Home
    </StyledConteiner>
    </>
  )
}

export default Home