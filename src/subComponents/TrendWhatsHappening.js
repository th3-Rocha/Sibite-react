import styled, { css } from 'styled-components'
import hexToRgba from 'hex-to-rgba';
import {COLORS} from '../values/colors';
import TrendShowMore from './TrendShowMore';
import TrendMatter from './TrendMatter';

const WhatsContainner = styled.div`
    background-color: ${hexToRgba(COLORS.trendBack)};;

    height: fit-content;
    width: 100%;
    border-radius: 15px;
    
    margin-top: 11px;
    border: 0px;
    display: flex;
    flex-direction: column;
    gap: 0px;

    h1{
        color: white;
        font-size: 20px;
        margin-left: 15px;
        padding-top: 10px;
    }
 
`

function TrendWhatsHappening() {
    return (
        
      <WhatsContainner >
        <h1>O que está acontecendo</h1>
        <TrendMatter topic ="Television" sibites = "554" subject = "Silvio Santos"/>
        <TrendMatter topic ="Gaming" sibites = "12" subject = "gta VII"/>
        <TrendMatter topic ="Comedy" sibites = "600" subject = "gkay"/>
        <TrendMatter topic ="Music" sibites = "450.2" subject = "Rebelde"/>
        <TrendMatter topic ="Politic" sibites = "2" subject = "#roubalheira"/>

        <TrendShowMore/>
      </WhatsContainner>
    );
  }
  
  export default TrendWhatsHappening;