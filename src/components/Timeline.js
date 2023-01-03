import styled, { css } from 'styled-components'
import hexToRgba from 'hex-to-rgba';
import {COLORS} from '../values/colors';

const Timelinecontainner = styled.div`
  
  height: 100vh;
  min-width: 600px;
  border-right: 1px;
  border-right-color: ${hexToRgba(COLORS.borderLine)};
  border-right-style: solid;
`



function Menu() {
  return (
    <Timelinecontainner>
      
    </Timelinecontainner>
  );
}

export default Menu;
