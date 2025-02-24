import React from 'react'
import SamuelImag from '../../../public/assets/avatar.jpg'
import { Usuarioconteiner, UsuarioStyles } from './styles';

const Usuario = () => {
  return (
  <>
    <Usuarioconteiner>
      <UsuarioStyles>
        <img src={SamuelImag} alt="Imagem de Samuel Green" />
        <p>
          <span>
          Samuel Green
          </span>
          <span> Available to Walk</span>
        </p>
      </UsuarioStyles>
    </Usuarioconteiner>
  </>
  );
};

export default Usuario;