import styled, { css } from 'styled-components'
import hexToRgba from 'hex-to-rgba';
import {COLORS} from '../values/colors';


const SibiteContainner = styled.button`

  background-color: yellow;
  width: 100%;
  min-height: 400px;
  color: white;
  border: 0px;
  &:hover{
    background-color: ${hexToRgba(COLORS.darkTimelineHighlight)};
    cursor: pointer;
  }
  
  transition: 0.2s;
`

function TimeSibiteView() {
      
     
    return (
      
      <SibiteContainner>         
        
      </SibiteContainner>
    );
  }
  
  export default TimeSibiteView;