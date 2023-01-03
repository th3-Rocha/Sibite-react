import styled, { css } from 'styled-components'
import hexToRgba from 'hex-to-rgba';
import {COLORS} from '../values/colors';

const ButtonStyle = styled.button`

  background-color: ${hexToRgba(COLORS.theme)};
  border-radius: 400px;
  padding: 12px;
  font-size: 20px;
  color: white;
  display: flex;
  justify-content: center;
  border: 0px;
  margin-top:16px;
  margin-right: 30px;
  &:hover{
    background-color: ${hexToRgba(COLORS.themeDark)};
    cursor: pointer;
  }
  
  transition: 0.2s;

  p{
    margin: 0px 20px 0px 20px;
    font-weight: 700;

  }
  @media screen and (max-width: 1360px) {
    p{
      display: none;
      
    }
    margin-right: 0px;
  }
  @media screen and (min-width: 1360px) {
    img{
      display: none;
    }
    
  }
`

function MenuSibitarButton(props) {
    return (
      <ButtonStyle>
        <img src={process.env.PUBLIC_URL + "/assets/svg/Sibitar.svg"}/>
        <p>
          Sibitar
        </p>
      </ButtonStyle>
    );
  }
  
  export default MenuSibitarButton;