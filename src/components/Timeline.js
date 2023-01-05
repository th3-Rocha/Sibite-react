import styled, { css } from 'styled-components'
import hexToRgba from 'hex-to-rgba';
import {COLORS} from '../values/colors';
import TimeHeader from '../subComponents/TimeHeader';
import TimeSibitar from '../subComponents/TimeSibitar';
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
      <TimeHeader/>
      <TimeSibitar/>
    </Timelinecontainner>
  );
}

export default Menu;
