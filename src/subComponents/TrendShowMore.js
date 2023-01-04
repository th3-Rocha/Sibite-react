import styled, { css } from 'styled-components'
import hexToRgba from 'hex-to-rgba';
import {COLORS} from '../values/colors';

const ShowMore  = styled.div`
width: 100%;
height: 50px;
border-bottom-left-radius: 15px;
border-bottom-right-radius: 15px;
display: flex;
align-items: flex-end;
margin-bottom: 0px;
p1{
    
    color:${hexToRgba(COLORS.theme)};
    margin-left: 15px;
    margin-bottom: 15px;
}
&:hover{
    background-color: ${hexToRgba(COLORS.trendHighLight)};;
    cursor:pointer;
}
`


function TrendShowMore() {
    return (
        <ShowMore>
        <p1>Mostrar mais</p1>
        </ShowMore>
    );
  }
  
  export default TrendShowMore;