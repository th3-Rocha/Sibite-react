import styled, { css } from 'styled-components'
import hexToRgba from 'hex-to-rgba';
import {COLORS} from '../values/colors';

const Credits = styled.div`
   color:  ${hexToRgba(COLORS.backText)};
   font-size: 13px;
   margin-top: 15px;
   display: flex;
   flex-basis: auto;
   align-items: stretch;
   padding-left: 16px;
   padding-right: 16px;
   flex-wrap: wrap;
   margin-bottom: 15px;
   p{
    padding-right: 12px;
    line-height: 16px;
   }
   p:hover{
    text-decoration: underline;
    cursor: pointer;
  }
`

function TrendCredits() {
   
  return (
    
    <Credits>         
        <p>
            Termos de Serviço
        </p>
        <p>
            Política de Privacidade
        </p>
        <p>
            Política de cookies
        </p>
        <p>
            Acessibilidade
        </p>
        <p>
            Informações de anúncios
        </p>
        <p>
            Mais
        </p>
        <p>
            © 2023 Sibiter, Inc. (não existe)
        </p> 
            
           
           
           
            
       
    </Credits>
  );
}

export default TrendCredits;