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
`



function Menu() {
  return (
    <OuterBox>
      
    </OuterBox>
  );
}

export default Menu;
