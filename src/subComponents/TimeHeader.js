import styled, { css } from 'styled-components'
import hexToRgba from 'hex-to-rgba';
import {COLORS} from '../values/colors';


const Header = styled.div`
    height: 53px;
    font-size: 10px;

    h1{
    color: ${hexToRgba(COLORS.whiteText)};
    }
    display: flex;
    flex-direction: row;
    padding-left: 16px;
    padding-right:16px;
    align-items: center;
    justify-content: space-between;
    margin-bottom: -50px;
    z-index: +10;
    position: relative;
    background: rgba(0, 0, 0, 0.7); // Make sure this color has an opacity of less than 1
     backdrop-filter: blur(10px); // This be the blur
`
const Imgs = styled.button`

  background-color: transparent;
  border-radius: 100vw;
  
  padding: 10px;
  width: max-content;
  color: white;
  display: flex;
  border: 0px;
  &:hover{
    background-color: ${hexToRgba(COLORS.highlight)};
    cursor: pointer;
  }
  img{
    height: 20px;
  }
  transition: 0.2s;

`

function TimeHeader() {
      
     
    return (
      
      <Header>         
        <h1>Página Inicial</h1>
        <Imgs >
            <img src={process.env.PUBLIC_URL + "/assets/svg/SibitesDestaques.svg"} ></img>

        </Imgs>
      </Header>
    );
  }
  
  export default TimeHeader;