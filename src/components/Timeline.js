import styled, { css } from 'styled-components'
import hexToRgba from 'hex-to-rgba';
import {COLORS} from '../values/colors';
import TimeHeader from '../subComponents/TimeHeader';
import TimeSibitar from '../subComponents/TimeSibitar';
import TimeShowMoreSibites from '../subComponents/TimeShowMoreSibites';
import TimeSibiteView from '../subComponents/TimeSibiteView';
const Timelinecontainner = styled.div`
  
  height: 100vh;
  min-width: 600px;
  border-right: 1px;
  border-right-color: ${hexToRgba(COLORS.borderLine)};
  border-right-style: solid;
  
`
const Scroll = styled.div`
   display: flex;
    flex-direction: column;
    overflow-y:scroll;
    ::-webkit-scrollbar {
        display: none;
    }
    max-height: 99.5vh;


`


function Menu() {
  return (
    <Timelinecontainner>
      <TimeHeader/>
      <Scroll>
        <TimeSibitar/>
        <TimeShowMoreSibites/>
        {(() => {
            const options = [];

            for (let i = 0; i <= 10; i++) {
              options.push(<TimeSibiteView></TimeSibiteView>);
            }

            return options;
          })()}
      </Scroll>
      

    </Timelinecontainner>
  );
}

export default Menu;
