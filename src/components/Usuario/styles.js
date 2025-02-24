import styled from "styled-components";


export const Usuarioconteiner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 225px;
    height: 66px;
    
    /* margin: 2rem 1.6rem; */
    background: linear-gradient(
    hsl(293, 100%, 63%) 5%, 
    hsl(264, 100%, 61%) 100%
    ); 
    border-top-left-radius: 1.1rem;
    border-top-right-radius: 1.1rem; 

    @media (max-width: 850px){

    };
`;

export const UsuarioStyles = styled.div`
    display: flex;
    align-items: center;
    margin-top: .7rem;
    gap: 20px;
    
    img{
        width: 27px;
        border-radius: 2rem; 
        border: 2px solid hsl(0, 0%, 81%); 
    };

    p{
      display: flex;
      flex-direction: column;

      font-weight: 600;
      font-size: 1rem;
      color: hsl(210, 46%, 95%);   
    };

    span{
        color: hsl(0, 0%, 81%);
        font-weight: 500;
        font-size: .8rem; 
    };
`;

