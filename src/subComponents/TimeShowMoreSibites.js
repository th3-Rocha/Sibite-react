import styled, { css } from 'styled-components'
import hexToRgba from 'hex-to-rgba';
import {COLORS} from '../values/colors';





const Show = styled.div`

  background-color: black;
  min-height: 52px;
  border:0px;
  border-bottom: 1px;
  border-style: solid;
  border-color: ${hexToRgba(COLORS.borderLine)};
  display: flex;
  justify-content: center;
  align-items: center;
    p{
        color: ${hexToRgba(COLORS.theme)};
    }
    &:hover{
    background-color: ${hexToRgba(COLORS.darkTimelineHighlight)};
    cursor: pointer;
  }
`




function TimeShowMoreSibites() {
      
    const rndInt = Math.floor(Math.random() * 500) + 1
    return (
      
      <Show>         
        <p>Mostrar {rndInt} Sibites</p>
      </Show>
    );
  }
  
  export default TimeShowMoreSibites;