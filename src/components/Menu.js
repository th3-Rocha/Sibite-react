import styled, { css } from 'styled-components'
import hexToRgba from 'hex-to-rgba';
import {COLORS} from '../values/colors';

const OuterBox = styled.div`
  width: 20vw;
  max-width: 275px;
  @media screen and (max-width: 998px) {
    max-width: 88px;
  }
  height: 100vh;
  border-right: 1px;
  border-right-color: ${hexToRgba(COLORS.borderLine)};
  border-right-style: solid;

  border: flex;
  flex-direction: row;
`
const ImgLogo = styled.img`
  max-width: 30px;
  margin-top: 15px;
`

function Menu() {
  return (
    <OuterBox>
       <ImgLogo src={process.env.PUBLIC_URL + "/assets/Sibite-logo.png"}/>

       <MenuButtons/>
    </OuterBox>
  );
}

export default Menu;

const Button = styled.Button`
  max-width: 30px;
  max-height: 30px;
  background-color: white;
  color: white ;
  margin-top: 15px;
`

function MenuButtons(Name){
  <Button>Name</Button>


}
