import styled, { css } from 'styled-components'
import hexToRgba from 'hex-to-rgba';
import {COLORS} from '../values/colors';
import TrendWhatsHappening from '../subComponents/TrendWhatsHappening';
import TrendtoFollow from '../subComponents/TrendtoFollow';
import TrendCredits from './TrendCredits';

const Grid = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y:scroll;
    ::-webkit-scrollbar {
        display: none;
    }
    max-height: 93.5vh;
   margin-top: 4px;
    
`

function TrendGrid() {
      
     
    return (
      
      <Grid>         
        <TrendWhatsHappening/>
        <TrendtoFollow/>
        <TrendCredits/>
      </Grid>
    );
  }
  
  export default TrendGrid;