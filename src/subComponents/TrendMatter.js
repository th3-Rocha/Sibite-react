import styled, { css } from 'styled-components'
import hexToRgba from 'hex-to-rgba';
import {COLORS} from '../values/colors';
import config from "../config.json";


const MatterContainer = styled.button`
  

  background-color:transparent;
  width: 100%;
  padding: 12px;
  font-size: 20px;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  border: 0px;
  margin-top:0px;
  text-align: left;
  &:hover{
    background-color: ${hexToRgba(COLORS.trendHighLight)};
    cursor: pointer;
  }
  p{
    font-size: 14px;
    color: ${hexToRgba(COLORS.backText)};
  }
  h2{
    font-size: 16px;
  }
  p1{
    font-size: 14px;
    color: ${hexToRgba(COLORS.backText)};
  }
  `
  const Svg = styled.img`
    height: 18px;
    padding: 8px;
    background-color: transparent;
    border-radius: 100px;
    &:hover{
        background-color:  ${hexToRgba(COLORS.themeLight,"0.1")};        
    }
  `

function TrendMatter(props) {
    return (
      <MatterContainer>
        <div>
            <p>{props.topic} · Assunto do Momento</p>
            <h2>{props.subject}</h2>
            <p1>{props.sibites} Mil Sibites</p1>
        </div>
        <Svg src={process.env.PUBLIC_URL + "/assets/svg/ProfileMore.svg"}/>
      </MatterContainer>
    );
  }
  
  export default TrendMatter;