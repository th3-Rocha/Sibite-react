import styled, { css } from 'styled-components'
import hexToRgba from 'hex-to-rgba';
import {COLORS} from '../values/colors';
import TrendtoFollowProfiles from './TrendtoFollowProfiles';
import TrendShowMore from './TrendShowMore';

const ToFollowContainner = styled.div`
    background-color: ${hexToRgba(COLORS.trendBack)};;

    height: fit-content;
    width: 100%;
    border-radius: 15px;
    padding-bottom: 0px;
    padding-top: 0px;
    margin-top: 15px;
    border: 0px;
    display: flex;
    gap: 0px;
    flex-direction: column;
    h1{
        color: white;
        font-size: 20px;
        margin-left: 15px;
        padding-top: 10px;
    }
    
`

function TrendtoFollow() {
    return (
        
      <ToFollowContainner>
       <h1>Quem Seguir</h1>
       <TrendtoFollowProfiles number = "1" />
       <TrendtoFollowProfiles number = "5" />
       <TrendtoFollowProfiles number = "4" />
       <TrendtoFollowProfiles number = "2" />
        <TrendShowMore>
        <p1>Mostrar mais</p1>
        </TrendShowMore>
      </ToFollowContainner>
    );
  }
  
  export default TrendtoFollow;