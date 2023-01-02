import styled, { css } from 'styled-components'
import hexToRgba from 'hex-to-rgba';
import {COLORS} from '../values/colors';

const OuterBox = styled.div`
  width: 380px;
  height: 100vh;
  border-left: 1px;
  border-left-color: ${hexToRgba(COLORS.borderLine)};
  border-left-style: solid;
  
`



function Trend() {
  return (
    <OuterBox>
      
    </OuterBox>
  );
}

export default Trend;
