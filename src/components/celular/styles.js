import styled from 'styled-components';

export const CelularConteiner = styled.div`
    width: 249px;
    height: 509px;
    max-width: 100%;

    margin-top: 2.5rem;
    margin-left: -3.7rem;

    background-color: aqua;
    border: 12px solid rgb(92, 90, 90);
    border-radius: 2rem; 
    position: relative; /* Necessário para o ::after ser posicionado em relação a este elemento */

  &::after {
    content: "";
    width: 132px; /* Defina o tamanho do quadrado */
    height: 23px;
    border-bottom-left-radius: 1.1rem;
    border-bottom-right-radius: 1.1rem;
    background-color: rgb(92, 90, 90); /* Cor do quadrado */
    position: absolute;
    top: -4px; /* Posiciona acima do CelularConteiner */
    left: 50%; /* Move a borda esquerda do quadrado para o centro */
    transform: translateX(-50%); /* Centraliza perfeitamente */
  }

`;