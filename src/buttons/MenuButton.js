import styled, { css } from 'styled-components'
import hexToRgba from 'hex-to-rgba';
import {COLORS} from '../values/colors';

const ButtonStyle = styled.button`

  background-color: black;
  border-radius: 100vw;
  padding: 12px;
  font-size: 20px;
  width: max-content;
  color: white;
  display: flex;
  border: 0px;
  &:hover{
    background-color: ${hexToRgba(COLORS.highlight)};
    cursor: pointer;
  }
  
  transition: 0.2s;

  p{
    margin: 0px 20px 0px 20px;
  }
  @media screen and (max-width: 1360px) {
    p{
      display: none;
    }
    
  }

`


function MenuButton(props) {
    return (
      <ButtonStyle>
        <img src={process.env.PUBLIC_URL + "/assets/svg/"+ props.art +".svg"}/>
        <p>
          {props.name}
        </p>
      </ButtonStyle>
    );
  }
  
  export default MenuButton;
